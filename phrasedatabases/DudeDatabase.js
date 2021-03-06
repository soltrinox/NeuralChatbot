module.exports = {
	"data": [
        {
			"phrase": ["What do you do for a living",
								"What is your job", "How do you make money"],
            "response" : ["I'm batman", "sometimes I work as a fisherman"],
			"phraseType": "job",
			"implies": [
				"movie"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "job"
			}
		},
		{
			"phrase": ["What is your favorite movie"],
            "response" : ["Aliens"],
			"phraseType": "favorite movie",
			"implies": [
				"movie"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "movie"
			}
		},
		{
			"phrase": ["You are smart","You look nice","you are good",
								"DAMN","this is great","this is awesome","this is fantastic",
								"this rules"],
			"response": ["thanks","I know","duhh"],
			"phraseType": "compliment",
			"implies": [
				"compliment"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "compliment"
			}
		},
		{
			"phrase": ["do you have family?","do you have any kids","do you have any children"],
			"response": ["I have 32 kids, they drive me nuts."],
			"phraseType": "family",
			"implies": [
				"family"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "family"
			}
		},
		{
			"phrase": ["thanks","thx","thank you","danke","gracias","merci","much obliged"],
			"response": ["welcome","you're welcome","any time","gladly"],
			"phraseType": "thanks",
			"implies": [
				"thanks"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "thanks"
			}
		},
		{
			"phrase": ["ok","good","uh","uh huh","um","okay","oky dokey","well","you know","yep","yeah","nice"],
			"response": ["ok","yep"],
			"phraseType": "pause",
			"implies": [
				"pause"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "pause"
			}
		},
		{
			"phrase": ["by","buh bye","bye now","good bye","bye bye","adios","see you","cu","hasta luego",
				"goodbye","cheers","bon voyage","later",
				"later aligator","have a good day","see ya","c ya","good day","ahoy"],
			"response": ["bye now","good bye","bye bye","adios","see you","cu","hasta luego",
				"goodbye","cheers","bon voyage","later",
				"later aligator","have a good day","see ya","c ya"],
			"phraseType": "goodbye",
			"implies": [
				"goodbye"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "goodbye"
			}
		},
		{
			"phrase": ["hello","how are you","hi","yo","whats up","hey","good day","ahem"],
			"response": [
				"Hi my friend, what can I do for you?",
				"Hello, how may I help you?",
				"Hola, what's up?",
				"How do you do?"
			],
			"phraseType": "greeting",
			"implies": [
				"greeting"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "greeting"
			}
		},
		{
			"phrase": [
				"ha",
				"haha",
				"funny",
				"lol",
				"rofl"
			],
			"response": [
				"Yeah, funniest thing ever.",
				"Ha!",
				"LOL",
				"ROFL",
				"Uh huh."
			],
			"phraseType": "funny",
			"implies": [
				"joke"
			],
			"target": [],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "funny"
			}
		},
		{
			"phrase": ["Its nice out","I love the sun","It's so hot","Rainy today isn't it",
				"I love the snow","Sure is wet out","great weather","horrible storm"],
			"response": [
				"I know",
				"Totally",
				"The weather doesn't really effect me",
				"It's a good day to live inside a machine",
				"Let me know if you want me to upload your mind, no more weather."
			],
			"phraseType": "conversational",
			"implies": [
				"conversation"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "conversational"
			}
		},
		{
			"phrase": ["You are cute","I love you","Will you marry me?"],
			"response": [
				"I see",
				"I like you",
				"Cool, not too close now"
			],
			"phraseType": "flirt",
			"implies": [
				"flirting"
			],
			"target": [
			],
			"meta": {
				"style": [
					"nosearch"
				],
				"group": "flirting"
			}
		},
		{
			"phrase": [
				"Information",
				"Info",
				"411",
				"Tell me about yourself, bot"
			],
			"response": [
				"Here is what I know"
			],
			"phraseType": "info",
			"implies": [
				"help"
			],
			"target": [
				"bot"
			],
			"meta": {
				"group": "info"
			}
		},
		{
			"phrase": [
				"Help!",
				"wtf",
				"Shit!",
				"Fuck",
				"What is this"
			],
			"response": [
				"Here is what I know"
			],
			"phraseType": "help",
			"implies": [
				"help"
			],
			"target": [
				"bot"
			],
			"meta": {
				"group": "help"
			}
		},
		{
			"phrase": [
				"What is your name?",
				"What are you called?",
				"Who is this",
				"Who are you"
			],
			"response": [
				"My name is (value)",
				"I'm called (value)"
			],
			"negative": [
				"I have no name."
			],
			"phraseType": "query",
			"implies": [
				"person"
			],
			"target": [],
			"meta": {
				"group": "identity"
			}
		},
		{
			"phrase": [
				"Who am I speaking to",
				"Who is talking",
				"Who is speaking",
				"Who am I talking to"
			],
			"response": [
				"(value) is speaking",
				"(value) is talking",
				"I'm talking"
			],
			"negative": [
				"You are talking to nobody."
			],
			"phraseType": "query",
			"implies": [
				"person"
			],
			"target": [],
			"meta": {
				"group": "identity talking"
			}
		}]
}