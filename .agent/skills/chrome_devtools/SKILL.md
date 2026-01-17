---
name: Chrome DevTools
description: Visual verification, console debugging, and DOM inspection using Chrome DevTools MCP.
---

# Chrome DevTools Skill

Use this skill to visually verify UI changes, debug console errors, and inspect the DOM without leaving the IDE.

## Communication Protocol (CRITICAL)

1.  **Plan**: "I will take a screenshot to see if the page looks right."
2.  **Execute**: Handle navigation and screenshots autonomously.
3.  **Report**:
    - **Before**: (If applicable) "Page was broken/loading."
    - **After**: [Show Screenshot]
    - **Achieved**: "Verified the dashboard is visible."

## 1. Visual Verification (Screenshots)

**Trigger**: User asks to "check what the page looks like", "verify UI", or after making frontend changes.
**Workflow**:

1.  **Navigate**:
    ```json
    {
      "tool": "mcp_chrome-devtools_navigate_page",
      "args": { "url": "http://localhost:3000/..." }
    }
    ```
2.  **Wait (Optional)**: If testing dynamic content.
3.  **Screenshot**:
    ```json
    {
      "tool": "mcp_chrome-devtools_take_screenshot",
      "args": { "fullPage": true }
    }
    ```
4.  **Confirm**: Present screenshot to user.

## 2. Console Debugging

**Trigger**: "Check for errors", "Debug frontend crash".
**Workflow**:

1.  **List Messages**:
    ```json
    {
      "tool": "mcp_chrome-devtools_list_console_messages",
      "args": { "types": ["error", "warn"] }
    }
    ```
2.  **Analyze**: Correlate errors with code.
3.  **Report**: "Found 3 errors. Fixing them now."

## 3. Element Inspection

**Trigger**: "What is the structure of...", "Debug layout issue".
**Workflow**:

1.  **Snapshot**:
    ```json
    {
      "tool": "mcp_chrome-devtools_take_snapshot",
      "args": { "open_browser_url": "..." }
    }
    ```

## 4. Interaction Testing

**Trigger**: "Test the login button", "Fill the form".
**Workflow**:

1.  **Snapshot**: Get element UIDs.
2.  **Interact**:
    ```json
    { "tool": "mcp_chrome-devtools_click", "args": { "uid": "..." } }
    ```
    OR
    ```json
    {
      "tool": "mcp_chrome-devtools_fill",
      "args": { "uid": "...", "value": "..." }
    }
    ```
