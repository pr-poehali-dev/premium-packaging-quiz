import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с формы на почту banka@ru-tara.com"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))

    company = body.get('company', '—')
    contact = body.get('contact', '—')
    email = body.get('email', '—')
    phone = body.get('phone', '—')
    volume = body.get('volume', '—')
    message = body.get('message', '—')

    smtp_user = 'banka@ru-tara.com'
    smtp_password = os.environ['SMTP_PASSWORD']
    smtp_host = 'smtp.mail.ru'
    smtp_port = 465

    message_html = message.replace('\n', '<br>')

    html = f"""
    <h2 style="color:#333">Новая заявка с сайта</h2>
    <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Телефон</td><td style="padding:8px;border:1px solid #ddd;font-size:16px;font-weight:bold;color:#c9a84c">{phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Компания</td><td style="padding:8px;border:1px solid #ddd">{company}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Контактное лицо</td><td style="padding:8px;border:1px solid #ddd">{contact}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">{email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Объём</td><td style="padding:8px;border:1px solid #ddd">{volume}</td></tr>
    </table>
    <h3 style="color:#c9a84c;border-bottom:2px solid #c9a84c;padding-bottom:6px">Коммерческое предложение</h3>
    <div style="background:#f9f6ee;border:1px solid #e8d99a;border-radius:6px;padding:16px;font-family:monospace;font-size:13px;line-height:1.7;white-space:pre-wrap">{message_html}</div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Заявка из калькулятора — {phone}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user
    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }