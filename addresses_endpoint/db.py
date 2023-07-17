import os
import sqlite3
from sqlite3 import Error


def create_db(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()

def check_n_setup(db_file):
    if not os.path.isfile(db_file):
        create_db(db_file)
        create_table()

def connect():
    conn = sqlite3.connect(r"./addresses.db")
    return conn

def insert_address(address, name, avatar, bio, subscriptionCost):
    check_n_setup(r"./addresses.db")
    try: 
        conn = connect()
        c = conn.cursor()
        c.execute("INSERT INTO addresses(address, name, avatar, bio, subscriptionCost) VALUES(?,?,?,?,?)",
                  (address, name, avatar, bio, subscriptionCost))
        conn.commit()
        conn.close()
        return True
    
    except Exception as e:
        
        try:
            conn = connect()
            c = conn.cursor()
            c.execute("UPDATE addresses SET name=?, avatar=?, bio=?, subscriptionCost=? WHERE address=?", (name, avatar, bio, subscriptionCost, address))
            conn.commit()
            conn.close()
            return True
        
        except Exception as e:
            return False

def get_addresses():
    check_n_setup(r"./addresses.db")
    conn = connect()
    try: 
        c = conn.cursor()
        c.execute("SELECT address, name, avatar, bio, subscriptionCost FROM addresses")
        rows = c.fetchall()
        data_dict = {}
        for row in rows:
            data_dict[row[0]] = {
                "name": row[1],
                "avatar": row[2],
                "bio": row[3],
                "subscriptionCost": row[4]
            }

        return data_dict

    finally:
        conn.close()

def delete_address(id):
    check_n_setup(r"./addresses.db")
    conn = connect()
    try: 
        c = conn.cursor()
        c.execute("DELETE FROM addresses WHERE id=?", (id,))
        conn.commit()

    finally:
        conn.close()

def create_table():
    conn = connect()
    try: 
        c = conn.cursor()
        c.execute('''
                  CREATE TABLE IF NOT EXISTS addresses(
                    id INTEGER PRIMARY KEY
                  , address TEXT NOT NULL UNIQUE
                  , name TEXT
                  , avatar TEXT
                  , bio TEXT
                  , subscriptionCost TEXT
                  );''')
        
        conn.commit()

    finally:
        conn.close()



# if __name__ == '__main__':
#     create_db(r"./addresses.db")
#     create_table()
#     insert_address("0x123456789", "test", "test", "test", "test")
#     insert_address("0x987654321", "test1", "test1", "test1", "test1")
#     print(get_addresses())
