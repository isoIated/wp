import discord

from discord.ext import commands

bot = discord.Client()
bot = commands.Bot(command_prefix="l", self_bot=True)
bot.remove_command("help")

@bot.event
async def on_connect():
    print (f"epicc purge ")

@bot.command()
async def ebrun(ctx, amount=100):
    await ctx.message.delete()
    async for message in ctx.message.channel.history(limit=amount).filter(lambda m: m.author == bot.user).map(lambda m: m):
        try:
            await message.delete()
        except:
            pass

bot.run("ODE5MDQ2NzE4NTkwOTQzMjQ0.YEg-qw.Cwo2Qb9Ba1rZiDPWkruHb46XoOE", bot=False)
