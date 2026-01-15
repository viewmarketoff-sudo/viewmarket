# Azure Container Apps Deployment

## GitHub Secrets Required

| Secret | Value |
|--------|-------|
| `AZURE_CREDENTIALS` | Service principal JSON (see below) |
| `ACR_LOGIN_SERVER` | `acrnextjstrading.azurecr.io` |
| `ACR_USERNAME` | ACR admin username |
| `ACR_PASSWORD` | ACR admin password |

Create service principal:
```bash
az ad sp create-for-rbac --name "github-actions-nextjs" --role contributor \
  --scopes /subscriptions/{sub-id}/resourceGroups/rg-nextjs-trading --sdk-auth
```

## How the Pipeline Works

1. Push to `main` triggers the workflow
2. Logs into Azure and ACR
3. Builds Docker image with commit SHA tag
4. Pushes to `acrnextjstrading.azurecr.io/nextjs-trading:{sha}`
5. Deploys to Container App `aca-nextjs-trading`

## Setting Environment Variables (Supabase, Auth, etc.)

**Do NOT store secrets in the repo.** Configure in Azure:

```bash
az containerapp update --name aca-nextjs-trading --resource-group rg-nextjs-trading \
  --set-env-vars \
    AUTH_SECRET=your-secret \
    AUTH_URL=https://your-app.azurecontainerapps.io \
    SUPABASE_URL=https://your-project.supabase.co \
    SUPABASE_SERVICE_ROLE_KEY=your-key \
    GOOGLE_CLIENT_ID=your-id \
    GOOGLE_CLIENT_SECRET=your-secret
```

Or use Azure Portal: Container Apps → aca-nextjs-trading → Environment variables

## Troubleshooting

**502 Bad Gateway**
- Check target port is 3000: `az containerapp show --name aca-nextjs-trading --resource-group rg-nextjs-trading --query "properties.configuration.ingress.targetPort"`
- Fix: `az containerapp ingress update --name aca-nextjs-trading --resource-group rg-nextjs-trading --target-port 3000`

**Build Failures**
- Ensure `package-lock.json` is committed
- Run `npm install` locally and commit lock file

**Missing Environment Variables**
- App crashes on startup → check logs: `az containerapp logs show --name aca-nextjs-trading --resource-group rg-nextjs-trading --type console`
- Verify all required env vars are set in Azure

**Rollback**
```bash
az containerapp update --name aca-nextjs-trading --resource-group rg-nextjs-trading \
  --image acrnextjstrading.azurecr.io/nextjs-trading:{previous-sha}
```
