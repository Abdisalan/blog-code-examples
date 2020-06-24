import psycopg2
import time

try:
    connection = psycopg2.connect(user = "Abdi",
                                  password = "",
                                  host = "localhost",
                                  port = "5432",
                                  database = "twitter")

    cursor = connection.cursor()

    page_size = 100
    s_total = time.time()
    for i in range(2000):
        start = time.time()
        # print("page %s" % i)
        cursor.execute("SELECT * from tweet ORDER BY id DESC LIMIT 100 OFFSET %s", (page_size * i,))
        cursor.fetchall()
        end = time.time()
        if i % 100 == 0:
            print("%s,%s" % (end - start,i))
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