# usbRobotArm
Scratch 2 Extension to control a USB Robot Arm with a Raspberry Pi

# Installation 

Starting from a fresh installation of the Raspberry Pi operating system switch it on and when you're at the desktop. (see the useful pages section at the  end of this document for links on how to do this)

1. Click on the `Terminal` Icon at the top left of the screen 

![Pic of Terminal Icon][Terminal]

3. Paste the following commands into the terminal windows, pressing return/enter after each command.

4. ```bash
   mkdir ~/DaybaScripts
   ```
5. ```bash
   cd ~/DaybaScripts
   ```
6. ```bash
   git clone https://github.com/thebhd/usbRobotArm.git
   ```
7. ```bash
   ~/DaybaScripts/usbRobotArm/Setup/setup.sh
   ```

8. Follow any instructions that appear in the terminal window and reboot the Pi when prompted. 

9. This should install the scratch extension and get everything ready for you. 

# Using the robot arm with Scratch 2

Scratch controls the robot arm by means of a server, which needs to be running **before** you run Scratch2!!!

### Running the server 

First check that the robot arm is switched on otherwise the server will fail to start

Double click the usbRobotArm Server icon (shown in red box below) on the desktop of the Raspberry Pi this will open a window with white text on a black background telling you that you can now start Scratch2

![Arm Server Icon and Terminal running][ArmServer]

## Example Scratch2 program 

I have created an example scratch 2 project to get you started with the robot arm to use it do the following.

1. Ensure the **arm is switched on** and the **server is running** (see above)

2. Click on the ```Raspberry start button``` on the top left of the screen.

3. Select ```Progamming``` and click ```Scratch 2```

4. Click ```File > Load Project```

5. Click/Double click ```Desktop(left column) > Scratch2 Examples > usbRobotArmExample.sb2```

6. Click ```open``` if it does not automatically open when selected 

7. Click ```Ok``` to replace the contents of the current project




### Controlling the arm from scratch 

With the **server running** in the background run Scratch 2 

The blocks for controlling the arm need to be loaded by:

1. Click on `more blocks`
2. Click `Add an Extension`
3. Double click on the robot arm icon 

You should now see the usb robot arm blocks in more blocks section


### Tips for good programs 

- Start off small and run the motors for very short times as the arm has no stops on its motors. **If you run a motor for too long it will get to the end of its travel hit something then break**. 
- Remember to include bits in your program what will reverse the movement of the arm otherwise **if you keep moving it in the same direction it will reach the end of its travel then break something**.



# Useful pages 

[Download page for Raspbian](https://www.raspberrypi.org/downloads/raspbian/)

Using windows and Win32DiskImager to copy the image to the SD card - [Win32DiskImager instructions](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)

[Official getting started with the Raspberry Pi Instructions](https://projects.raspberrypi.org/en/projects/raspberry-pi-getting-started) Step 6 is particularly relevant as it shows you how to setup Wi-Fi/Wireless

Additional Wi-Fi/Wireless setup details can be found here - https://projects.raspberrypi.org/en/projects/raspberry-pi-using/4



## Credit goes to ...

* This project is based on the work done by Fraimondi's project [https://github.com/fraimondi/pymarash](https://github.com/fraimondi/pymarash)

* The work of the ScratchX team https://github.com/LLK/scratchx/wiki 
* The Raspberry Pi foundation 

[Terminal]: ./README/Terminal.png "Terminal Icon at top of screen"

[ArmServer]: ./README/ArmServer.png "Arm server icon and server terminal window running "