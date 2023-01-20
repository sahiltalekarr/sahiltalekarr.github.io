import smtplib
class SendEmail:
    """
    A class to send email given the email and message.


    Args:
        email (str): email id of recipient.
        message (str): message that needs to be sent.
    """


    #username : senders gmail username
    username = 'senders gmail username'
    #password : senders gmail password
    password = 'senders gmail password'
    def __init__(self,email,message):
        self.email = email
        self.message = 'Subject: {}\n\n{}'.format("Reminder! You have Scheduled a task", message)

    def send(self):
        #Method sends the mail via smtp lib
        server = smtplib.SMTP_SSL('smtp.gmail.com',465)
        server.login(self.username,self.password)
        server.sendmail(
            self.username,
            self.email,
            self.message
        )
        server.quit()
if __name__=='__main__':
    email = input("Email Id: ")
    message = input("Message: ")
    a = SendEmail(email,message)
    a.send()
