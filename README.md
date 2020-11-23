# Real-Time Visualisation of Distributed Energy Resources (DER) in Distribution Networks
## Introduction
This code is used to demonstrate the distributed network visualization of data from the CRE21 case study based on the OpenDSS model simulation. In this product, all readable data are local offline data, stored as an array in the corresponding "Offline_data" .js file. Due to the limitations of Covid19's global epidemic impact and RTDS data limitations encountered during the completion of the project, it was not possible to demonstrate the project with actual real time data at this time.

However, in the code, for example, the code for variable "count" is read in real time, and the details of this variable will be explained in the following section.

When running this code, please make sure that your computer can run the scripting languages **HTML, JavaScript, CSS**, and your computer installed **Python 3**, otherwise you may encounter problems for run this code.
## Simple Running the Code
To run this code, you need to open the "**index.html**" file and run it, chrome is recommended.
When you run the "**index.html**" file you will automatically be taken to the CRE-21 medium voltage network and you can access the low voltage network by clicking on the load arrows connected with each transformer to activate the low voltage preview window.
If you want to run the low-voltage network directly, you can run the "**index3.html**" file.

Since the resolution of the computer used in the design process is **3849*2160**, it may vary depending on your computer's resolution.

## Auto Time Turnover
As mentioned earlier, the "**count**" variable in this project is read in real time. It acts as a pointer to the entire project data to read the simulation data at the same index in time.
When you simply run the "**index.html**" file, the data is fixed at index = 18 (9:00). However, if you run the "**AutoCounter.py**" file at the same time, your data will be refreshed in real time at a rate of once every 3 seconds. You can change this refresh rate with this line of code:
```python
second = sleep_time(0, 0, 3) # 3 sec do once
```
Due to python's read/write txt text feature, whenever you run this python file, the product will have a read problem and your whole visualization will be in red, but once when the code automatically refresh the counter value to the next number, the whole system will work normally, so don't worry.

In the future, the same approach can be applied to other variables to make data readings real-time.
## Additional Resources
"Road to Endeavor" video: https://youtu.be/Fx0DbiDgaYM
"Endeavour Presentation" video: https://youtu.be/fG_mT0dTieo

If you need any help or want to know more about our data, our project, and anything about us, please leave your comment.

Thank you for your use and cooperation.
