#
# voice-skill-sdk
#
# (C) 2020, YOUR_NAME (YOUR COMPANY), Deutsche Telekom AG
#
# This file is distributed under the terms of the MIT license.
# For details see the file LICENSE in the top directory.
#
#
from random import randint
from skill_sdk import skill, Response, ask, tell
from skill_sdk.l10n import _
import requests

# Ask our user questions from other users
INTENT_NAME = 'TEAM_02_ASK_QUESTIONS_ANSWER'

@skill.intent_handler(INTENT_NAME)
def handler() -> Response:
    msg = _('TEAM_02_ASK_QUESTIONS_ANSWER_MATCH')
    
    # We ask the user back
    return ask(msg)
