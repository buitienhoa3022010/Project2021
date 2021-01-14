from Hòa import emailProcess, printMsg

def main():
    email = ['qyd@gmail.com', 'youtube@Hòa.dev', 'liverpool@winner.com']
    for email in email:
        username, email_domain = emailProcess(email)
        printMsg(username, email_domain)

if __name__ == "__main__":
    main()