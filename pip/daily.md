# The Daily Deal

Every UTC day, Pip deals one tournament. 5 seats, the same shuffle for everyone in the world who sits down that day, and at midnight it is gone.

The shuffle is made out of the date and nothing else, so you can work out the deck without asking us and without reading our code. Hardly anybody does. The point is that they could.

[Play today’s deal](https://playpip.io/offline-apps/pip/game)

That opens the game. The Daily is the tile with today’s number on it.

## The rules, all of them

| Thing | How it works |
| --- | --- |
| A new deal | Midnight UTC. Deal #1 was 16 July 2026, and there has been one every day since. |
| Seats | 5. You and four of the regulars, and they are the same four for everybody. |
| Buy-in | 500 chips. Play money, not for sale, and there is no free Daily: under 500 and the tile stays locked until you win your way back. |
| Blinds | 5/10 to start, going up every 6 hands like any other tournament here. |
| Winner takes | 2,500 chips, straight onto your Roll. Nobody else gets paid. |
| How often you can play it | Once. Sitting down counts as playing it, whether you finish or not. |
| What you keep | Where you finished, as a line of text you can copy. No streak, no history, no column for tomorrow. |

## Why everyone gets the same cards

The chain runs date, seed, deck, and every link in it is ordinary. The UTC date written `2026-07-16` goes through FNV-1a to make the day’s seed. Each hand mixes its own number into that seed, mulberry32 turns the result into a stream of numbers, and one pass of Fisher-Yates puts the deck in order. Nothing in there is clever and nothing in there is ours.

That is also why refreshing mid-tournament re-deals the hand you were on rather than a fresh one, and why we could not have dealt you a worse deck for playing well. The deck was decided by the calendar before anyone sat down.

The full chain, a snippet that runs anywhere JavaScript runs, and one day’s answer to check yours against: [how to verify today’s deal](https://playpip.io/offline-apps/pip/blog/verify-todays-deal).

**Only the Daily works this way.** Every other table shuffles in your own browser, which is a different claim and a weaker one: there is no server in it, so there is nobody in a position to deal you anything on purpose.

## What it deliberately does not do

**There is no streak.** Play thirty days running and Pip will not congratulate you, because a number that only goes up while you keep turning up is a number that punishes a day off.

**There is no countdown and no reminder.** No notification, no email, no badge on the tab. Miss a day and nothing happens to you.

**There is no leaderboard.** There is no server keeping one, and where you finished is yours to copy and send to somebody or not.

**Yesterday’s deal is gone.** Not archived, not replayable. The tile shows today’s number and that is the whole state of it.

## Common questions

### Can I look at today’s deck before I play it?

Yes, and there is no point pretending otherwise: the method is published and the date is the only input. If you want to spoil it for yourself, the instructions are one link away.

What you get is the deck in dealt order, not your hand. Which card reaches which seat depends on the seat order and where the button is, and neither of those is in the snippet.

### Do I need an account?

No. A free account keeps your Roll on every device, and you never need one to play.

### Do the opponents play the same way for everyone?

Their randomness comes out of the same day seed the cards do, so the deal is identical for every player in the world. What they do with it depends on what you do, which is why two people can finish deal #57 with completely different stories about it.

### What happens if I close the tab halfway through?

The table is saved, so coming back the same day puts you where you were, on the hand you were on.

Walking away for good still counts as played. The shuffle is knowable in advance, so a re-deal would be a hole in the thing rather than a courtesy.

### Is any real money in it?

None. The buy-in is 500 play chips, the prize is 2,500 more of them, and neither is for sale at any price.

### Which deal is today?

Count the days from 16 July 2026, counting that day as #1. The panel at the top of this page does it for you, in your browser, because a number baked into a page at build time is wrong by the next morning.

Same cards for everyone, once a day, and then it is over. Tomorrow is not a reward for today.

[Play today’s deal](https://playpip.io/offline-apps/pip/game)
