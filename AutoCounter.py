import time
def sleep_time(hour, min, sec):
    return hour * 3600 + min * 60 + sec

count = 1
second = sleep_time(0, 0, 3) # 5 sec do once
while True:
    time.sleep(second)
    count_write = str(count)
    fo = open("js/count.txt", "w")
    fo.seek(0)
    # fo.truncate()
    fo.write(count_write)
    fo.close
    print(count_write)
    if (count == 47):
        count = 0
    else:
        count += 1
