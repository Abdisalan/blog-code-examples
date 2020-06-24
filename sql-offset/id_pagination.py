import psycopg2
import time
try:
    connection = psycopg2.connect(user = "Abdi",
                                  password = "",
                                  host = "localhost",
                                  port = "5432",
                                  database = "twitter")

    cursor = connection.cursor()

    cursor.execute("SELECT * from tweet ORDER BY id DESC LIMIT 101")
    tweets = cursor.fetchall()

    page_size = 100
    
    next_page_id = tweets[-1][0]
    s_total = time.time()
    for i in range(20000):
        start = time.time()
        # print("page %s" % i)
        cursor.execute("SELECT * from tweet WHERE id <= %s ORDER BY id DESC LIMIT 101", (next_page_id,))
        tweets = cursor.fetchall()
        next_page_id = tweets[-1][0]
        end = time.time()
        if i % 100 == 0:
            print("%s,%s" % (i, end - start))
    e_total = time.time()
    print("TOTAL %s" % (e_total - s_total))
        



except (Exception, psycopg2.Error) as error :
    print ("Error while connecting to PostgreSQL", error)
finally:
    #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            # print("PostgreSQL connection is closed")