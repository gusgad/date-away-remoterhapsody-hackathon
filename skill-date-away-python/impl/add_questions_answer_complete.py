#
# voice-skill-sdk
#
# (C) 2020, YOUR_NAME (YOUR COMPANY), Deutsche Telekom AG
#
# This file is distributed under the terms of the MIT license.
# For details see the file LICENSE in the top directory.
#
#
import random
from skill_sdk import skill, Response, ask, tell
from skill_sdk.l10n import _
import requests
from six.moves import urllib

# Add the answer of the user itself to the previously added question
INTENT_NAME = 'TEAM_02_ADD_QUESTIONS_ANSWER_COMPLETE'

@skill.intent_handler(INTENT_NAME)
def handler(stt_text: str) -> Response:
    try:
        stt_text_quoted = urllib.parse.quote(stt_text)

        # We make a request to our backend API to add our own answer to our question
        response = requests.get('http://node-app:5000/questions-ask-complete/' + stt_text_quoted, timeout=10)
        # We parse the response json or raise exception if unsuccessful
        response.raise_for_status()
        data = response.json()
        
        # We get a translated message
        if random.random() > 0 and random.random() < 0.5:
            msg = _('TEAM_02_ADD_QUESTIONS_ANSWER_COMPLETE_READ')
        else:
            msg = _('TEAM_02_ADD_QUESTIONS_ANSWER_COMPLETE_READ2')
 
    except requests.exceptions.RequestException as err:
        msg = _('TEAM_02_ASK_QUESTIONS_ANSWER_REQUEST_ERROR', err=err)

    
    # We return the response
    return ask(msg)
