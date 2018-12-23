#! /bin/bash
echo "running the USB Robot Arm setup script"
mkdir ~/DaybaScripts
cd ~/DaybaScripts

#install jq to manipulate json settings files
sudo apt-get -y install jq

#install pyUSB
pip install --pre pyusb

#add udev rule 

sudo cp ~/DaybaScripts/usbRobotArm/Setup/99-usbDaybaRobotArm.rules /etc/udev/rules.d/99-usbDaybaRobotArm.rules
sudo chown root:root /etc/udev/rules.d/99-usbDaybaRobotArm.rules
sudo chmod 644 /etc/udev/rules.d/99-usbDaybaRobotArm.rules

#add extension to scratch extension libary 
sudo cp -r ~/DaybaScripts/usbRobotArm/Setup/extensionFiles/* /usr/lib/scratch2/scratch_extensions/
sudo cp ~/DaybaScripts/usbRobotArm/Setup/extensionFiles/images/* /usr/lib/scratch2/medialibrarythumbnails/

#check for existance of arm in extensions file before installing another extension
if grep -q 'USB Robot Arm' /usr/lib/scratch2/scratch_extensions/extensions.json; then
    echo "Found entry in scratch 2 extensions file: skipping adding the extension"
else
    echo "Arm not in extansions file: adding it now"

    #backup existing extensions file 
    sudo cp /usr/lib/scratch2/scratch_extensions/extensions.json /usr/lib/scratch2/scratch_extensions/extensions.json.dflt

    #add reference to the extension to extensions.json
    sudo rm /usr/lib/scratch2/scratch_extensions/extensions.json #haveing to delete the original is annoying but for some reason jq output to sudo tee does not work properly otherwise 
    sudo jq -s add /usr/lib/scratch2/scratch_extensions/extensions.json.dflt ~/DaybaScripts/usbRobotArm/Setup/scratch_extensions_template.json | sudo tee -a /usr/lib/scratch2/scratch_extensions/extensions.json
fi

#copy short cut to the pi desktop
cp  ~/DaybaScripts/usbRobotArm/Setup/usbArmServer.desktop ~/Desktop/usbArmServer.desktop

#copy the examples to the desktop
sudo cp ~/DaybaScripts/usbRobotArm/Setup/Scratch2Examples/* ~/Desktop/Scratch2Examples/



if (whiptail --title "Reboot Required" --yesno "A reboot is required click yes to reboot now or no to reboot later." 8 78); then
    sudo shutdown -r now 
else
    echo "Reboot canceled, remember to reboot manualy otherwise the usb robot arm will not work."
fi
 

