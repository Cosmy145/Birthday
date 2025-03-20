import React, { useState } from 'react';
import { FaHeart} from 'react-icons/fa';
import birthdayImage from './assets/BirthdayImage.jpeg'; // Replace with the actual path to your image

const DemoWebsite: React.FC = () => {
    const [message] = useState<string>(`
    Happy Birthday, Angel! I wanted to do something a little different to show you how much you mean to me. Even though we've only met online, you've become such an important part of my life.

    You are one of the cutest person i have ever met. I can keep looking at you for hours, listen to your voice... those lips, hair, hands... The way you move your hair behind your ears..uffff.... and the way you bite your lower lip..gosh the urge to do that for you😩>>
    
    I wish that someday we'll actually get to meet in person. I know it might be complicated, but I really hope it happens. Then we can fight for hours in real hehe, those taane to each other...meko to gussa bhi ni aana tumhe dekhte hue.
    
    It hurted like hell when i lost you for the first time....It shattered me. Then you left me again(I don't wanna talk about it anymore). But i'm happy that you came back pookie. I missed you. You make my day when you call me.. when you let me see you on video call or when you send me your snaps...I just wish i could get that voice more early after waking...but fir tumhari bhua har waqt tumhare sath hoti hai...still washroom ka bahana maarke mujhe tumhari awaaz suna diya karo na honeybee.
    
    Even though you just live an hour away from my home... it feels like thousands of miles🥺. I wish i could meet you soon. Pata hai..i'm still so fucking scared ki like is she a lier..what kinda girl she is... after today i'm really comfy with you... the way you mention the gender after telling about your friend...but still my past experience has been really really bad to fir..me just trying to make myself believe that she ain't like that anymore. I guess i'll be super comfy only after meeting you or a few million hours of video calls(which i really want).

    Baba..i wish you would tell me things..the things that happen in your day. I know we just met a few days ago, and we are still getting comfy with each other, but i wanna hear about your day.. jab tum college jao tab kya kiya...kya kya chize hui.. the things you felt all day..just everything.

    I know you have a lil idea of what you mean to me and you said to me ki give some time maybe i'll mean the same to you... i hope our wishes come true...i hope this time you never leave..

    You are so cute...i still think why the hell is a girl like that talking to a guy like me..she must be having so many guys better than me dying to talk to her...to be with her.. and she's still with me..hehe🤭.

    Okie..so now i'll just host this site coz i just saw the time and it's super late..i forgot to have my dinner😅...aur dhoodh bhi kharab ho gya...now gotta figure out something to eat..now me hungry af..got 2 exams tomorrow and me tired as fuck...i wish i get to video call you tomorrow on your birthday and um...maybe get to call you for hours at night too if your parents allow for one day...hehe.

    Acha um.. btw um...ahh..choddho..baaki baate milne par coffee pe karenge honeybee.....♥️

    You means a lottttttttt to me pookie. I hope one day i'll be able to show you how much i care for you.
    
    I hope you have the most amazing birthday, Angel✨. You deserve all the happiness in the world.

  `);

    const [oneDayDreams] = useState<string[]>([
        "I wanna grab coffee and talk for hours. I just wanna look at you for hours...listening to you talking",
        "I wanna hang out with you in parks, go to different places..monuments.. click so many pics with you make memories.",
        "I wanna go out for shopping with you(not only because your fashion sense is so good,hehe), and wanna wear the clothes you like.",
        "I wanna drink with you... and then just sit with you and talk to you for hours, listening to your heart... atleast you will tell me then what's going in that heart of yours."
    ]);

    return (
        <div className="font-sans bg-gradient-to-b from-purple-100 to-white min-h-screen">
            {/* Header/Hero Section */}
            <header className="py-12 px-4 text-center">
                <div className="inline-block rounded-full bg-white p-2 shadow-lg">
                    {/*<div className="bg-purple-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto" />*/}
                    <img
                        src={birthdayImage}
                        alt="Birthday Angel"
                        className="rounded-xl h-100 w-100 mx-auto object-cover"
                    />
                </div>
                <h1 className="text-4xl font-bold text-purple-700 mt-4">Happy Birthday, Angel!🥳🎂♥️</h1>
                <p className="text-purple-600">I made a little something for you...</p>
            </header>

            {/* Main Message Section */}
            <section className="max-w-2xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md my-8">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {message}
                </p>
            </section>

            {/* "One Day..." Section */}
            <section className="max-w-2xl mx-auto px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">One Day...</h2>
                {oneDayDreams.map((dream, index) => (
                    <div key={index} className="bg-purple-50 rounded-lg p-4 border border-dashed border-purple-200 mb-4 last:mb-0">
                        <p className="text-purple-600">{dream}</p>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className="text-center font-semibold py-6 text-purple-800">
                made by Shivansh for "the angel he fell for"... hoping that someday she falls for him too...... and not leave him again😊
                <div
                    className="mt-2 text-pink-500"
                >
                    <FaHeart size={30} className="mx-auto" />
                </div>
            </footer>
        </div>
    );
};

export default DemoWebsite;