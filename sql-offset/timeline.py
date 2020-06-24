import psycopg2
try:
    connection = psycopg2.connect(user = "Abdi",
                                  password = "",
                                  host = "localhost",
                                  port = "5432",
                                  database = "twitter")

    cursor = connection.cursor()

    cursor.execute('''
    SELECT u.name FROM user_follower as uf
    JOIN users as u ON u.id = uf.follower_id
    WHERE uf.user_id = 11;
    ''')
    print("Abdi's followers:")
    users = cursor.fetchall()
    for name in users:
        print(name[0])

    
    cursor.execute('''
    SELECT users.name, tweet.content FROM tweet
    JOIN users ON users.id = tweet.user_id
    ORDER BY tweet.content;
    ''')
    tweets = cursor.fetchall()
    for name, tweet in tweets:
        print("%s: %s" % (name, tweet))



except (Exception, psycopg2.Error) as error :
    print ("Error while connecting to PostgreSQL", error)
finally:
    #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")