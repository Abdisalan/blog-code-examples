import psycopg2
try:
    connection = psycopg2.connect(user = "Abdi",
                                  password = "",
                                  host = "localhost",
                                  port = "5432",
                                  database = "twitter")

    cursor = connection.cursor()

    # cursor.execute('''
    # INSERT INTO users (id, name) VALUES
    #     (11,'User1'),
    #     (12,'User2'),
    #     (13,'User3'),
    #     (14,'User4'),
    #     (15,'User5');
    # ''')
    for i in range(400000):
        cursor.execute('''
        INSERT INTO tweet (user_id, content) VALUES
            (11, 'sdfsdfsdfsdf'),
            (12, 'dfsfsdfs'),
            (13, 'sdfsfsdk'),
            (14, 'sfsdfwerwesdjfs'),
            (15, 'sfdsfsdfsdfdw');
        ''')
        connection.commit()

    print("You did it\n")



except (Exception, psycopg2.Error) as error :
    print ("Error while connecting to PostgreSQL", error)
finally:
    #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
