!function(){
	try{
		var message=["             ____________________________________________________\n            /                                                    \\ \n           |    _____________________________________________     |\n           |   |                                             |    |\n           |   |  C:\> _                                      |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |            Checking out my code?            |    |\n           |   |                 I like you.                 |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |                                             |    |\n           |   |_____________________________________________|    |\n           |                                                      |\n            \\_____________________________________________________/\n                   \\_______________________________________/\n                _______________________________________________\n             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_\n          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_\n       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_\n    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_\n _-'.-.-.-.-.-. .---.-. .-----------------------------. .-.---. .---.-.-.-.`-_\n:-----------------------------------------------------------------------------:\n`---._.-----------------------------------------------------------------._.---'"].join("").split(""),i=message.length,output=[],colors=[];
		for(message.reverse();i--;)
			output.push("%s"+message[i]),
			""===message[i]?colors.push("color: red"):colors.push("")
			;console.log.apply(console,[output.join("")].concat(colors))
	}catch(err){}
}();
