/**/
const Discord = require('discord.js');
const TOKEN = "NDYxOTk4MzA3NTk0NjAwNDU4.DhrgBw.pMJZSgfx1jvT7f6A3TiMHnSWtHM";
const bot = new Discord.Client();
const randomPuppy = require('random-puppy');
const moment = require('moment');
/**/

bot.on("ready", async() => {

	/*/Avisos/*/
	//bot.channels.get('462296079946219551').send("Aeh rapaziada eu e o DualRoot vamos dormir, boa noite fiquem com Deus! @here");
	//bot.channels.get('462296079946219551').send("**~Recebi alguma atualização ou fui modificado em algum!~**");
	//bot.channels.get('462296079946219551').send("**~Donate atualizadado verifique r!donate no canal #comandos ou será kickado!~**\n@here");
	//bot.channels.get('462296079946219551').send("**Aeh caralho recebi mais uma atuazalição. ♥**\n```Verifique minha versão: r!att```\n@here");
	//bot.channels.get('462296079946219551').send(":fire:**~Novidades~**:fire:\n\n//\n@here");
	//bot.channels.get('462296079946219551').send("**Checker PeixeUrbano adicionado com sucesso. Verifique:** r!chks ♥\n@here");
    //bot.channels.get('462296079946219551').send("**Tô de volta porra! Sentiram minha falta ? Claro que sim né** ♥");
    //bot.channels.get('462296079946219551').send("**Soltei algum no #donates** ♥");
    //bot.channels.get('461970304458293258').send(":dollar: **Aproved** :dollar:```markdown\n\nAprovada	4617255002590435	09	19	345	R$ 28,74	VISA CITIBANK (HONG KONG), LTD. GOLD HONG KONG(HK)	Transação Aprovada	#DualRoot```");
    console.log(`${bot.user.username} esta pronto para brincar com ${bot.users.size} utilizadores!`); // console.log so pode ser visto no console do bot
	console.log("Codigo refeito por ThePlayer. Se tiver alguma duvida chame !! ThePlayer#0951"); // console.log so pode ser visto no console do bot
    bot.user.setActivity(`Você | r!help`, {type:"LISTENING"}); /*/ Muda a atividade do bot para "assitindo" /*/

});

bot.on('guildMemberAdd', member => { 

    console.log('Usuario ' + member.user.username + ' entrou no servidor!'); 
    
    var role = member.guild.roles.find('name', 'MEMBRO')
    member.addRole(role); 
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM") 
    .setThumbnail(member.user.avatarURL) 
    .setAuthor("Novo marginal!") 
    .setDescription("Bem vindo ao servidor! " + "<@" + member.user.id + ">" + ", ser fizer baguncinha vamos comer seu ânus.")
    .setFooter("Novo membro") 
    .setTimestamp() 
    let entrada = member.guild.channels.find('name', 'bem-vindo')
    entrada.send(embed) && member.send('Aeh mano(a) bem-vindo(a), qualquer dúvida chame o DualRoot!');
});


  ///////////////////////////////////
 //           Comandos            //
///////////////////////////////////

    bot.on('message', async message => { 
	
			if (message.author.bot) return; // Checa se o a mensagem foi enviada por um bot
			if (message.channel.type === "dm") return; // Checa se o a mensagem foi enviada por mensagem direta 
            const prefix = "r!"; // prefixo 
            let messageArray = message.content.split(" ");
            let cmd = messageArray[0];
            let cont = message.content.slice(prefix.lenght).split(" ");
            let args = cont.slice(1);
			
        if(cmd === `${prefix}server`){ // Status do servidor
                let online = message.guild.members.filter(member => member.user.presence.status !== 'offline'); // Verifica quantos membros estão online
                let day = message.guild.createdAt.getDate()
                let month = 1 + message.guild.createdAt.getMonth()
                let year = message.guild.createdAt.getFullYear()
                let sicon = message.guild.iconURL; // icone do embed (pode mudar)
                 
				 let serverembed = new Discord.RichEmbed()
                 .setAuthor(message.guild.name, sicon)
                 .setFooter(`Servidor Criado em • ${day}.${month}.${year}`) // data de criação do servidor
                 .setColor("#7289DA") // cor do embed em HEX. Se quiser mudar as cores use este site https://www.w3schools.com/colors/colors_picker.asp
                 .setThumbnail(sicon)
                 .addField("ID do Supremo", message.guild.id, true) // ID do servidor
                 .addField("Nome do Server", message.guild.name, true) // Nome do servidor
                 .addField("Supremo do Servidor", message.guild.owner.user.tag, true) // Dono do servidor
                 .addField("Região", ":flag_br:", true) // Região do servidor
                 .addField("Total de Canais:", message.guild.channels.size, true) // numero de canais do servidor
                 .addField("Total de Membros:", message.guild.memberCount, true) // numero de membros no servidor
                 .addField("Total de Pessoas:", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true) // numero de humanos no servidor
                 .addField("Total de Bots:", message.guild.members.filter(m => m.user.bot).size, true) // numero de bots no servidor
                 .addField("Membros Online:", online.size, true) // numero de membros ativos/online no servidor
				 .addField("Total de Cargos:", message.guild.roles.size, true) // numero de roles dentro do servidor
				 .setFooter("Code by Dualroot & ThePlayer.");
                 message.channel.send(serverembed); // envia o embed
        }
        if(cmd === `${prefix}att`){ /*/Versao dele/ /*/
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Version DualBoot", bot.user.avatarURL) 
			.setDescription("Atualmente estou na versão: 0.2.3 BETA");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}donates`){ /*/Versao dele/ /*/
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Donates", bot.user.avatarURL) //Sem donate espere o DualRoot colocar!
			.setDescription("**Netshoes > r!donate-netshoes**\n**PagSeguro > r!donate-pag**\n**PeixeUrbano > r!donate-peixe**");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}donate-netshoes`){ /*/Versao dele/ /*/
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Donate 01/07", bot.user.avatarURL) //Sem donate espere o DualRoot colocar!
			.setDescription("**Logins Netshoes**\n\n```markdown\n#APROVADO : girley.simoes@uol.com.br|05490549 | Vales: Sim | Valor: R$ 149,50 | Utilizado: R$ 0,00 | Disponivel: R$ 149,50 | Vencimento: 02/12/2017 | Ativo: Sim\n#APROVADO : lu.peres@uol.com.br|000000 | Vales: Sim | Valor: R$ 179,90 | Utilizado: R$ 179,90 | Disponivel: R$ 0,00 | Vencimento: 06/07/2014 | Ativo: Nao\n#APROVADO : paula-tannus@uol.com.br|pd050467 | Vales: Sim | Valor: R$ 79,00 | Utilizado: R$ 79,00 | Disponivel: R$ 0,00 | Vencimento: 20/12/2017 | Ativo: Nao\n#APROVADO : edvelca@bol.com.br|103254 | Vales: Sim | Valor: R$ 118,90 | Utilizado: R$ 118,90 | Disponivel: R$ 0,00 | Vencimento: 07/12/2016 | Ativo: Nao```");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}donate-pag`){ /*/Versao dele/ /*/
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Donate 01/07", bot.user.avatarURL) //Sem donate espere o DualRoot colocar!
			.setDescription("**Logins PagSeguro**\n\nAguarde o DualRoot Atualizar, eu irei informar quando ele colocar ;)");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}donate-peixe`){ /*/Versao dele/ /*/
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Donate 01/07", bot.user.avatarURL) //Sem donate espere o DualRoot colocar!
			.setDescription("**Logins PeixeUrbano**\n\n```markdown\nAprovada ✓ » | carneiro.oliveira@gmail.com | violin07 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | pmduarte@bol.com.br | pm0510 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | deiaoliverb@yahoo.com.br | 826473 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | viniciuscruzeirao@bol.com.br | vt1997 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | gislainebueno1@bol.com.br | fe030706 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | jhonatanfagundes@YAHOO.COM.BR | 586270 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | fcota@zipmail.com.br | pimpolho ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | mmtaty@bol.com.br | 110306 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | 2024@bol.com.br | c20m24 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | sandyluty@hotmail.com | 02020202 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | monicatrench@bol.com.br | laura123 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | fernandalucia.alves@bol.com.br | 140283 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | acl.conviver@bol.com.br | conviver ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | sandratanita@yahoo.com.br | 001034 ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | mirelascrodrigues@hotmail.com | beleza ➜ Crédito: R$0,00 | CC:\nAprovada ✓ » | klissiabombom@hotmail.com | 92451034 ➜ Crédito: R$0,00 | CC:```");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}`){ // comando vazio
			
			message.channel.send("Oi, coloca algum pra mim executar ainda não sei adivinhar. Para listar meus comandos r!help");
		}
		if(cmd === `${prefix}cpf`){ // comando vazio
			
			message.channel.send("Em desenvolvimento.");
		}
		if(cmd === `${prefix}hora`){ // comando hora
			
			const embed = new Discord.RichEmbed()
				 .setAuthor("São:", bot.user.avatarURL)
				 .setColor("RANDOM")
				 .setTimestamp()
				message.channel.send({embed});
		}
		if(cmd === `${prefix}ping`){ // comando ping
			const m = await message.channel.send(`🏓 Pong!  (${~~bot.ping}ms)`);
		}
		if(cmd === `${prefix}info`){ // comando info
            if (!message.channel.id === '462286452236091423') { 
            message.channel.send("O burrão comandos do BOT apenas no #comandos");
            }else{ // executa o comando se o canal for comandos_bot
            let totalSeconds = process.uptime();
            let realTotalSecs = Math.floor(totalSeconds % 60);
            let days = Math.floor((totalSeconds % 31536000) / 86400);
            let hours = Math.floor((totalSeconds / 3600) % 24);
            let mins = Math.floor((totalSeconds / 60) % 60);
            const embed = new Discord.RichEmbed()
                 .setAuthor("Dualbot", bot.user.avatarURL)
                 .setColor("RANDOM")
                 .setDescription("Olá sou DualBot um bot desenvolvido por: **DualRoot** e **ThePlayer**\n\nNo momento estou em desenvolvimento! mas em breve terei mais **Comandos**\n\nPara ver meus comandos use **r!help**\n\nInformações:")
                 .addField("🔗Canais:\n", `${message.guild.channels.size}`, true)
                 .addField("👥Usuarios:\n", `${bot.users.size}`, true)
                 .addField("🔗Uptime:\n", `${days}d:${hours}h:${mins}m`, true)
                  /*.addField("🔗Ping:\n", `${~~bot.ping}ms)`, true)*/
            message.channel.send({embed});
            }
        }
		if(cmd === `${prefix}help`){ // comando help
			
			let totalSeconds = process.uptime();
			let realTotalSecs = Math.floor(totalSeconds % 60);
			let days = Math.floor((totalSeconds % 31536000) / 86400);
			let hours = Math.floor((totalSeconds / 3600) % 24);
			let mins = Math.floor((totalSeconds / 60) % 60);
			const embed = new Discord.RichEmbed()
				 .setAuthor("Dualbot", bot.user.avatarURL)
				 .setColor("RANDOM")
				 .setDescription("Olá sou **DualBot** e essas são minhas função.\n\n**Prefixo r! exemplo: r!hora**\n\n**> ping**\n**> vamos (Chame ele pra algum lugar)**\n**> lema**\n**> comedia**\n**> avatar**\n**> Unni?**\n**> DualRoot?**\n**> userinfo**\n**> donates**\n**> hora**\n**> cpf [OFF]**\n**> chks**\n**> userinfo**\n**> nsfw (+18)**\n**> server**\n**> help**\n\n\n")
				 .addField(":printer: Comandos:\n", "19", true)
				 .addField("👥 Usuarios:\n", `${bot.users.size}`, true)
				 .addField("🔗 Uptime:\n", `${days}d:${hours}h:${mins}m`, true)
				 /*.addFooter(`🔗Ping: ${~~bot.ping}ms`)*/
			message.channel.send({embed});
		}
		if(cmd === `${prefix}Unni?`){ // comando sim
			message.channel.send("**Irmão do DualRoot/Ryan**");
		}
		if(cmd === `${prefix}lema`){ // comando checkers
			
			message.channel.send("171 ser quer alguma coisa vai atrás pq depender dos outros não presta!\n\nby #6513");
		}
		if(cmd === `${prefix}quer?`){ // comando checkers
			
			message.channel.send("Quero CAFÉEEE.");
		}
		if(cmd === `${prefix}chks`){ // comando checkers
			const embed = new Discord.RichEmbed()
			.setAuthor("Checkers Disponível")
			.setDescription("\n**Netshoes > r!chk-netshoes**\n\n**PagSeguro > r!chk-pagseguro**\n\n**Go4Gold > r!chk-gold**\n\n**PeixeUrbano > r!chk-peixe**");
		message.channel.send({embed});
		}
		if(cmd === `${prefix}chk-netshoes`){
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Code by DualRoot/Ryan") /*/https://chk-netshoes-by-familydualroot.000webhostapp.com/ /*/
			.setDescription("Netshoes [ON]\n\n**>** [**Click-me**](https://chk-netshoes-by-familydualroot.000webhostapp.com)\n\n`Ajude manter ON fornecendo hospedagem!`");	
			message.channel.send({embed});
		}
		if(cmd === `${prefix}chk-pagseguro`){
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Code by DualRoot/Ryan") /*/https://chk-netshoes-by-familydualroot.000webhostapp.com/ /*/
			.setDescription("PagSeguro [ON]\n\n**>** [**Click-me**](https://chk-pag-by-familydualroot.000webhostapp.com/)\n\n`Ajude manter ON fornecendo hospedagem!`");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}chk-gold`){
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Code by ShadowProxy") /*/https://chk-netshoes-by-familydualroot.000webhostapp.com/ /*/
			.setDescription("Gold [ON]\n\n**>** [**Click-me**](http://checkermp.com:8080/gold/)\n\n`Créditos total ao Shadow.`");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}chk-peixe`){
			
			const embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor("Code by Loocked") /*/https://chk-netshoes-by-familydualroot.000webhostapp.com/ /*/
			.setDescription("PeixeUrbano [ON]\n\n>**>** [**Click-me**](http://18.191.165.253/)\n\n`Code Loocked. Talvez tenha CX2 !!!`");
			message.channel.send({embed});
		}
		if(cmd === `${prefix}DualRoot?`){ // comando dualroot
			message.channel.send("**Criador do Family DualRoot e do canal DualRoot Black-Hat**");
		}
		if(cmd === `${prefix}userinfo`){ // Melhorei o comando de userinfo
			
			let user;
			// Se o usuario mencionar alguem mostra o status da pessoa mas se n mencionar mostra seu propio status.
			if (message.mentions.users.first()) {
			  user = message.mentions.users.first();
			} else {
				user = message.author;
			}
			
			const member = message.guild.member(user);
			
			//Um embed do Discord para ficar uma mensagem mais bonita.
			const embed = new Discord.RichEmbed()
				.setAuthor("Dualbot", bot.user.avatarURL)
				.setColor('RANDOM') // Poem uma cor randomica se quiser alterar use este site https://www.w3schools.com/colors/colors_picker.asp
				.setThumbnail(user.avatarURL) // muda a thumbnail do embed
				.setTitle(`${user.username}#${user.discriminator}`) // titulo do embed (nome do usuario q executou o comando)
				.addField("ID:", `${user.id}`, true)
				.addField("Nome:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
				.addField("Conta criada em:", `${moment.utc(user.createdAt).format('HH:mm:ss')}`, true)
				.addField("Entrou no Server em:", `${moment.utc(member.joinedAt).format('HH:mm:ss')}`, true)
				.addField("Bot:", `${user.bot}`, true)
				.addField("Status:", `${user.presence.status}`, true)
				.addField("Jogo:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
				.addField("Cargo:", member.roles.map(roles => `\`${roles.name}\``).join(', '), true)
				.setFooter(`Respondendo para ${message.author.username}#${message.author.discriminator}`)
				
				// envia o embed
				message.channel.send({embed});
		}
		if(cmd === `${prefix}avatar`){ // comando avatar // 
			
			// Verifica se quem executou o comando mencionou alguem se n tiver mencionado o usuario sera quem executou o comando
			let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

			/* Cria um embed */
			let embed = new Discord.RichEmbed() 
				.setTitle(member.tag + '\' Coisa mais do que essa nunca nem vi') // titulo do embed "avatar"
				.setImage(member.avatarURL); // avatar do membro

			/* Envia o embed */
			message.channel.send({embed})
		}
		//NSFW ILIMITADO
		if(cmd === `${prefix}nsfw`){
    		if (!message.channel.nsfw) return message.reply("Este comando so pode ser usado em canais NSFW!");

    		var subreddits = [
        	'NSFW_Wallpapers',
        	'SexyWallpapers',
        	'HighResNSFW',
        	'nsfw_hd',
        	'UHDnsfw'
    		]
    		var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
    		.then(url => {
        	const embed = new Discord.RichEmbed()
        	.setColor("RANDOM")
        	.setAuthor("Safadinho.", bot.user.avatarURL)
        	.setFooter("By DualBot")
        	.setImage(url);
    		message.channel.send({ embed });
        	})
		}
		if(cmd === `${prefix}vamos`){
			var lista_vamos = [ // lista de resposta vamos
				"Não",
				"Sim",
				"Talvez",
				"Isso é um abuso!",
				"Vou denunciar ser me chamar novamente.",
				"Vou pedir pro dualroot.",
				"Me deixa em paz!",
				"", // se quiser adicionar mais imagens e so meter o link entre estas "", // Depois vou te ensinar como usar uma API para teres imagens ilimitadas
		];
		var mix = lista_vamos[Math.round(Math.random() * (lista_vamos.length - 1))]; // Pega na lista nsfw e pega em um link randomico
			/* Envia um link randomico para o canal NSFW */
			message.channel.send(mix);
		}
		if(cmd === `${prefix}comedia`){
			if (!message.channel.comandos) return message.reply("Este comando so pode ser usado canal comandos");
			var lista_comedia = [ // lista de resposta comedia
				{files: ["./imgs/1.jpg"]},
				{files: ["./imgs/2.jpg"]},
				{files: ["./imgs/3.jpg"]},
				{files: ["./imgs/4.jpg"]},
				{files: ["./imgs/5.jpg"]},
				{files: ["./imgs/6.jpg"]},
				{files: ["./imgs/7.jpg"]},
				{files: ["./imgs/8.jpg"]},
				{files: ["./imgs/9.jpg"]},
				{files: ["./imgs/10.jpg"]},
				{files: ["./imgs/11.jpg"]},
				{files: ["./imgs/12.jpg"]},
				{files: ["./imgs/13.jpg"]},
				{files: ["./imgs/14.jpg"]},
				{files: ["./imgs/15.jpg"]},
				"", // se quiser adicionar mais imagens e so meter o link entre estas "", // Depois vou te ensinar como usar uma API para teres imagens ilimitadas
		];
		var mix = lista_comedia[Math.round(Math.random() * (lista_comedia.length - 1))]; // Pega na lista nsfw e pega em um link randomico
			/* Envia um link randomico para o canal NSFW */
			message.channel.send(mix);
		}
 })

bot.login(TOKEN)
