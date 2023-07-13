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

def insert_address(address):
    check_n_setup(r"./addresses.db")
    try: 
        conn = connect()
        c = conn.cursor()
        c.execute("INSERT INTO addresses(address) VALUES (?)", (address,))
        conn.commit()
        conn.close()
        return True
    
    except Exception as e:
        print(e)
        conn.close()
        return False

def get_addresses():
    check_n_setup(r"./addresses.db")
    conn = connect()
    try: 
        c = conn.cursor()
        c.execute("SELECT * FROM addresses")
        rows = c.fetchall()
        return [row[1] for row in rows]

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
                  );''')
        
        conn.commit()

    finally:
        conn.close()



# if __name__ == '__main__':
#     # create_db(r"./addresses.db")
#     # create_table()
#     # insert_address("0x123456789")
#     # insert_address("0x987654321")
#     print(get_addresses())
