# Windows fundamentals

## Windows Fundamentals 1

<p align="center">
  <img src={require("./assets/windows-fundamentals/windows-fundamentals-1.png").default} width="128" />
</p>

### Task 1 - Introduction to Windows

> Read above and start the virtual machine.

No answer needed

### Task 2 - Windows Editions

> What encryption can you enable on Pro that you can't enable in Home?

BitLocker

### Task 3 - The Desktop (GUI)

> Which selection will hide/disable the Search box?

Hidden

> Which selection will hide/disable the Task View button?

Show Task View button

> Besides Clock and Network, what other icon is visible in the Notification Area?

Action Center

For the first two points it is enough to do right click over the Taskbar.

<p align="center">
  <img src={require("./assets/windows-fundamentals/taskbar.png").default} />
</p>

### Task 4 - The File System

> What is the meaning of NTFS?

New Technology File System

### Task 5 - The Windows\System32 Folders

> What is the system variable for the Windows folder?

%windir%

### Task 6 - User Accounts, Profiles, and Permissions

> What is the name of the other user account?

tryhackmebilly

<p align="center">
  <img src={require("./assets/windows-fundamentals/lusrmgr.png").default} />
</p>

> What groups is this user a member of?

Remote Desktop Users,Users

<p align="center">
  <img src={require("./assets/windows-fundamentals/groups.png").default} />
</p>

> What built-in account is for guest access to the computer?

Guest

> What is the account status?

Account is disabled

### Task 7 - User Account Control

> What does UAC mean?

User Account Control

### Task 8 - Settings and the Control Panel

> In the Control Panel, change the view to Small icons. What is the last setting in the Control Panel view?

Windows Defender Firewall

<p align="center">
  <img src={require("./assets/windows-fundamentals/settings.png").default} />
</p>

### Task 9 - Task Manager

> What is the keyboard shortcut to open Task Manager?

Ctrl+Shift+Esc

### Task 10 - Conclusion

> Read above and terminate the Windows machine you deployed in this room.

No answer needed

## Windows Fundamentals 2

<p align="center">
  <img src={require("./assets/windows-fundamentals/windows-fundamentals-2.png").default} width="128" />
</p>

### Task 1 - Introduction

> Read above and start the virtual machine.

No answer needed

### Task 2 - System Configuration

> What is the name of the service that lists Systems Internals as the manufacturer?

PsShutdown

<p align="center">
  <img src={require("./assets/windows-fundamentals/psshutdown.png").default} width="128" />
</p>

> Whom is the Windows license registered to?

Windows User

<p align="center">
  <img src={require("./assets/windows-fundamentals/license.png").default} width="128" />
</p>

> What is the command for Windows Troubleshooting?

C:\Windows\System32\control.exe /name Microsoft.Troubleshooting

<p align="center">
  <img src={require("./assets/windows-fundamentals/windows-troubleshooting.png").default} width="128" />
</p>

> What command will open the Control Panel? (The answer is the name of .exe, not the full path)

control.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/control.png").default} width="128" />
</p>

### Task 3 - Change UAC Settings

> What is the command to open User Account Control Settings? (The answer is the name of the .exe file, not the full path)

UserAccountControlSettings.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/uac.png").default} width="128" />
</p>

### Task 4 - Computer Management

> What is the command to open Computer Management? (The answer is the name of the .msc file, not the full path)

compmgmt.msc

<p align="center">
  <img src={require("./assets/windows-fundamentals/computer-management.png").default} width="128" />
</p>

> At what time every day is the GoogleUpdateTaskMachineUA task configured to run?

6:15 AM

<p align="center">
  <img src={require("./assets/windows-fundamentals/task.png").default} width="128" />
</p>

> What is the name of the hidden folder that is shared?

sh4r3dF0Ld3r

<p align="center">
  <img src={require("./assets/windows-fundamentals/shared-folder.png").default} width="128" />
</p>

### Task 5 - System Information

> What is the command to open System Information? (The answer is the name of the .exe file, not the full path)

msinfo32.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/system-info.png").default} width="128" />
</p>

> What is listed under System Name?

THM-WINFUN2

<p align="center">
  <img src={require("./assets/windows-fundamentals/system-name.png").default} width="128" />
</p>

> Under Environment Variables, what is the value for ComSpec?

%SystemRoot%\system32\cmd.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/compsec.png").default} width="128" />
</p>

### Task 6 - Resource Monitor

> What is the command to open Resource Monitor? (The answer is the name of the .exe file, not the full path)

resmon.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/resource-monitor.png").default} width="128" />
</p>

### Task 7 - Command Prompt

> In System Configuration, what is the full command for Internet Protocol Configuration?

C:\Windows\System32\cmd.exe /k %windir%\system32\ipconfig.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/ip-configuration.png").default} width="128" />
</p>

> For the ipconfig command, how do you show detailed information?

ipconfig /all

<p align="center">
  <img src={require("./assets/windows-fundamentals/ipconfig.png").default} width="128" />
</p>

### Task 8 - Registry Editor

> What is the command to open the Registry Editor? (The answer is the name of the .exe file, not the full path)

regedt32.exe

<p align="center">
  <img src={require("./assets/windows-fundamentals/regedit.png").default} width="128" />
</p>
