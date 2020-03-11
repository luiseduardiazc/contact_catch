"""

Connects to the facebook API and gets the comments of a post.

"""
import json
import re
import requests


def scrap(access_token, url):
    """ Does all the job. """

    post_id_regex = re.compile(r'fbid=(\d+)')

    post_id = post_id_regex.findall(url)[0]

    u_id_regex = re.compile(r'&id=(\d+)')

    u_id = u_id_regex.findall(url)[0]

    api_id = u_id + '_' + post_id

    api_url = 'https://graph.facebook.com/' + api_id + \
        '?access_token=' + access_token + '&fields=comments'

    res = requests.get(api_url)

    comments = res.json()['comments']['data']

    phoneRegex = re.compile(r'''(

    (\(?\s?\+?(\d{1,2}-\d{3,4}|\d{1,3})\s?\)?)? # country code

    (\s|-|\.)? # separator

    (\d{3}) # first 3 digits

    (\s|-|\.)? # separator

    (\d{3}) # next 3 digits

    (\s|-|\.)? # separator

    (\d{2}) # next 2 digits

    (\s|-|\.)? # separator

    (\d{2}) # last 2 digits

    )''', re.VERBOSE)

    # Email regex.

    emailRegex = re.compile(r'''(

    [a-zA-Z0-9._%+-]+ # username

    @ # @ symbol

    [a-zA-Z0-9.-]+ # domain name

    (\.[a-zA-Z]{2,4}) # dot-something

    )''', re.VERBOSE)

    phones = []

    emails = []

    for comment in comments:

        match = phoneRegex.findall(comment['message'])

        if match:

            phones.append(match[0][0])

        match = emailRegex.findall(comment['message'])

        if match:

            emails.append(match[0][0])

    '''
    if len(phones) or len(emails):

        print('\n'.join(phones))

        print('\n'.join(emails))

    else:

        print('No phone numbers or email addresses found.')

    '''
    return emails, phones