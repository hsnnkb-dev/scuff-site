import React from "react";

import ArtistOverviewCard from "./article/ArtistOverviewCard";

// Styling and Assets
import PUNK_ICON from "../assets/branding/icons/necklace.png";
import "../styles/branding-fonts.css";
import "../styles/poppins-font.css";

// TODO: Multiple stylings inside of title, e.g. italic and regular
function ArticleTitle({ title }) {
  const titleStyling = "title font-the-seasons text-5xl mb-4";
  const boldTitleStyling = "theseasonsbold";
  const lightTitleStyling = "theseasonslight";

  // show in-person
  return (
    <h1 className={titleStyling}>
      {/* <p className={boldTitleStyling}>No Cameo, No problem</p> */}
      <p>No Cameo, No problem</p>
      {/* <p className={lightTitleStyling}>No Cameo, No problem</p> */}
    </h1>
  );

  return <h1 className={titleStyling}>{title}</h1>;
}

function Byline({ author, date, genre }) {
  const bylineStyling =
    "font-the-seasons-light flex justify-between max-w-[50%] mb-4";
  const genreStyling = "flex align-center text-[#C0272A]";

  return (
    <div className={bylineStyling}>
      <p>By Katherine Barnett</p>
      <p>31 October 2025</p>
      <p className={genreStyling}>
        <img src={PUNK_ICON} className="h-6 mx-1" />
        Punk
      </p>
      {/* TODO: Add comments section and functionality */}
    </div>
  );
}

// TODO: Finish off paragraphs structure and add links into the text
function ArticleIntroduction({ paragraphs }) {
  const introductionContainer = "poppins-extralight max-w-[67%] mb-6";
  const paragraphStyling = "mb-2";

  return { paragraphs };
}

function ArticleSection({ content }) {
  const sectionContainerStyling = "poppins-extralight max-w-[75%] mb-6";
  const sectionSubtitleStyling = "title font-the-seasons text-2xl mb-2";
  const sectionContentStyling = "";

  const ArtistComment = (
    <p className={artistCommentStyling}>
      <span className={artistNameStyling}></span>:
    </p>
  );
}

export default function ArticleTemplate() {
  // TODO: Fix font the seasons
  const artistCommentStyling = "mb-4";
  const artistNameStyling = "font-the-seasons text-lg";
  const katCommentStyling = "font-the-seasons text-lg my-4";
  const subtitleStyling = "title font-the-seasons text-xl mb-2";

  const sectionStyling = "poppins-extralight max-w-[75%] mb-12";
  const sectionSubtitleStyling = "title font-the-seasons text-2xl mb-2";
  const sectionContentStyling = "";

  return (
    <main className="p-4 mx-8 ml-32 mt-24">
      <ArticleTitle title="No Cameo, No Problem" />
      <Byline />
      <div className="poppins-extralight max-w-[67%] mb-8 leading-[144%]">
        <p className="mb-2">
          <span className="font-wednesday text-4xl">I</span>n the run up to the
          release of their new single, ‘Win a Fortune’, I caught up with
          up-and-coming Leeds band No Cameo, braving a rainstorm to chat in the
          rustic Fenton pub. The venue was the choice of rhythm guitarist and
          vocalist AJ Byrne, picked on the basis that iconic synth-pop duo Soft
          Cell had also once been interviewed within its four walls.
        </p>
        <p className="mb-2">
          The Fenton is also where AJ and lead guitarist/No Cameo founder Miles
          O’Sullivan first met, before their inaugural rehearsal with bass
          guitarist and producer Mag Fielding. While No Cameo has been through a
          number of iterations, its current formation sees the band at its best
          yet, with their newest edition of Will Brooke on drums. In the words
          of Mag: “as soon as we had the four elements sorted out, everything
          just fell into place so quickly - just Tetris all the way down.”
        </p>
        <p className="mb-2">
          Over beers (and before taking part in a rogue pub quiz), Miles, Mag,
          AJ and I discussed No Cameos’ new single, future plans, the existence
          of God, and whether The Beatles were ever really all that.
        </p>
        <p className="mb-2 poppins-extralight-italic">
          You can listen to No Cameo’s new single wherever you stream music,
          including: Spotify, Apple Music and BandCamp. You can also catch them
          playing Live at Leeds in the City on November 15th.
        </p>
      </div>

      <ArtistOverviewCard />

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>Who and what is No Cameo?</h2>
          <h2>How would you describe yourselves as a band?</h2>
        </div>

        <p>
          <span className={artistNameStyling}>AJ</span>: Essentially, we're an
          art punk band. The name came about because we try to keep everything
          in-house, between us and our friends. No Cameo isn’t for anyone else,
          it’s about us, and it’s about an unconventional, arty approach to
          music.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Tell me about your new single, ‘Win a Fortune’ - what’s it all
            about?
          </h2>
        </div>

        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: The single’s about
          dating in the LGBTQ+ scene. We have a chant for it at gigs - I’m
          trying to make it a thing - where I get everyone to shout “men ain’t
          shit” beforehand. Essentially, I’d say it's the most conventional song
          we have in our set.
        </p>

        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: It’s the only song
          that survived our experimentation phase, our ‘phase one’. All the
          other songs have been axed and cut.
        </p>

        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: We spent a long time
          finding our sound, and sometimes thinking that [our first iteration]
          was our sound. And then we realised that we can do better - but that’s
          the song that stayed throughout all that.
        </p>

        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: We masqueraded as an
          indie band for a bit, but now we’ve realised that we don’t have an
          indie sound, and it’s not an indie song.
        </p>

        <p className={katCommentStyling}>
          No, it's definitely not an indie song. I think if it was going to be
          on Spotify they'd probably just label it as ‘alternative’ because they
          wouldn't know how to categorise it.
        </p>

        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: Yeah, that’s kind of
          our aim!
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={sectionSubtitleStyling}>
          <h2>
            Who are some of your biggest influences, both as individuals and as
            a band?{" "}
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: I’ve always been a
          right little pop-head. So, growing up for me, it was 21 Pilots, Fall
          Out Boy, and Gorillaz. I wouldn’t say those bands carry through to my
          influences for No Cameo, but growing up, those were my three core
          bands. As for my influences for No Cameo? I shut up and be a bass
          player!
        </p>
        <p className={artistCommentStyling}>
          We have quite a lot of moments I would describe as a “hear me out”
          moment. Whenever someone says “hear me out”, everyone else has to stop
          and listen to what idea that person has. I feel like a lot of the
          time, we’re following AJ’s vision, or with the newer stuff, Miles too.
          These guys come with an initial idea, and the rest of us will build
          off of that idea and follow them as the leader.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: We’ve realised that
          we’re not a band that jamming works for. We don’t describe things as
          ‘verse’, ‘chorus’ or whatever. We’ve changed it to sections, so it’s a
          bit more free flow. It means that if we have at least three
          established sections and we’ve written something, we bring those in
          and we kind of shape it from there.{" "}
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: We're trying to escape
          the norms of popular music.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: I’m glad you told us
          what your influences were though, Mag. So, 21 Pilots and Fall Out
          Boy…?!
        </p>
        <p className={katCommentStyling}>
          We can’t just do Mag’s, I need to hear everybody else's!
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: Oh, where do I
          start?! I mean, I didn't get into music until a bit later, so that’s
          probably the embarrassing bit - I just pretended to listen to music.
          And then…I listened to Nickelback in the car, and Fall Out Boy was the
          first tape that I got. It was then that I became conscious.
        </p>
        <p className={katCommentStyling}>
          I like that Fall Out Boy seems to be the overriding theme of this
          interview.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: We’re a Fall Out Boy
          band!
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: Fall Out Boy covers
          band, here we go!
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: 2000s music though,
          I wasn’t too into that. I dug into the 90s, 80s to 60s, and then I
          realised that there's so much more to music than what's happening
          right now. Going forward, you need to look back, not just to what you
          listened to, but what your parents listened to.
        </p>
        <p className={katCommentStyling}>How about you, AJ?</p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: Back in the day, the
          first album I ever bought was Demon Days by Gorillaz, so it was
          alternative straight away. I did have my dalliances with Fall Out Boy,
          because my sister was really obsessed with them, and a lot of what I
          listened to growing up was a mix between what my parents liked and
          what she liked. In terms of early bands I really like though, I really
          fuck with The Doors, love James Brown, and Gorillaz obviously.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: [To AJ] We want
          embarrassing music!
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: Well, I went and saw
          Back Veil Brides play a gig once. I actually saw them four times. I
          really liked hair metal as a kid, so they were like a hair metal band
          that didn’t look ancient that I could go and see. In terms of bands
          that influence what we do now, I’d say maybe Interpol is a massive
          one, and 90s emotional hardcore stuff like Orchid, Rites of Spring, or
          Fugazi.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: More in the Leeds
          local scene, we’ve been looking at a couple of bands like The 113 and
          Mince.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Leeds has a solid reputation for being a great place to break out in
            music. Do you think that the city has become oversaturated, or do
            you think there's still room to emerge as an artist here?
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: I don’t think that it’s
          become oversaturated. The issue is that there’s not a lot of variation
          anymore.
        </p>
        <p className={artistCommentStyling}>
          When I first started coming to gigs in Leeds during uni and when I
          first moved to Leeds five years ago, you had bands like Weirds, bands
          like Cattle…you had the early ruminations of bands like English
          Teacher, whereas now it's kind of jumped back to that kind of 2010’s
          vibe where it's like college-level bands just playing the Arctic
          Monkeys’ meets Wunderhorse vibes. Which is great - rep South
          Yorkshire! - but there is a lot of room for improvement in the local
          scene.
        </p>
        <p className={artistCommentStyling}>
          Because the level that it’s at…it’s either that you’re [local venue’s]
          Royal Park Cellars, Pack Horse or Sela’s vibe - which are bands that
          have just started which you don’t really know, which might have a
          great sound but haven’t really established their vibe yet. And then it
          jumps up to a [Hyde Park] Book Club vibe, where you can fill a bigger
          room, and then it jumps up again from there to your Wardrobe’s, your
          Project Houses, your Belgrave’s…I think there’s not a lot of bands
          from Leeds that can fill those spaces, unless they’re already
          established from years ago.
        </p>
        <p className={artistCommentStyling}>
          But the best band in Leeds - I will say this - is Mince. Mince is my
          favorite fucking band in Leeds, I love those guys so much.
        </p>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            On that note, what are some of your favourite venues to go to in
            Leeds?
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: Brudenell
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: Yeah Brudenell is a
          bit of a pipe dream
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: It’s the obvious
          choice, but it’s the place where good bands will play and say how good
          it is, and they will have played there for the third or fourth time.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: When I was at uni in
          York, I would commute over to watch bands play at Brude because I knew
          it would be a great place to go. But there’s also the likes of Wharf
          Chambers - they’re great! Belgrave is also great depending on the gig,
          and [Hyde Park] Book Club.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Is there any specific venue which you are particularly grateful to
            as a band?
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: Vinyl Whistle
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: I would say Vinyl
          Whistle as well. They’re a little independent vinyl and coffee shop,
          we’ve played multiple gigs there and they’ve been lovely every time
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: They give us free
          hire.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: It's so important
          for new artists as well. It's a small place so you can pack it out,
          and when you pack it out it's a good time. It’s great all round.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: It's not the greatest
          sound system in the world by any means, but it feels like you're sat
          in somebody's living room, and it’s very intimate.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: And they don't care if
          you damage the property if it looks good when you do it! Big up Adam
          from Vinyl Whistle, he’s a great guy.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: The way it usually
          goes is that the bigger a venue is, the better its reputation. But
          Vinyl Whistle is one of the standout venues which has a tiny capacity,
          but a great reputation.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: And everyone who works
          there is such a nice human being as well.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Obviously, you're called No Cameo. If you could make a cameo as a
            band in any TV show, what TV show would you pick?
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: It'd either be Gossip
          Girl, or a trashy HAYU reality TV show like Vanderpump Rules. Or maybe
          the musical entertainment either on a Below Deck or a Real Housewives
          episode. That’d be my vibe, personally.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: What was that one we
          watched recently, Virgin Island? I don’t know what we’d do in it.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: Show them how to fuck?
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: I reckon if we’d
          replaced the Jonas Brothers in Camp Rock it would have been a way
          better movie.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: Just get me a
          tambourine!
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Inspired by your new single, ‘Win a Fortune’, if you won a fortune,
            what would you do with it?
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: I’d buy a new car! I’d
          100% get a recording studio. I would get some little warehouse or
          broken down house in Leeds and just refurb it, and live out of my
          recording studio bedroom.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: I mean it depends
          how much. If it's like a small fortune, enough to go part-time, I’d
          focus on the band. If it’s a big fortune…I’d fuck off the band and
          just live! That's the aim, isn't it? To get rich and not speak to you
          guys? [sarcasm]
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: I’m glad that the
          sarcasm was in there.
        </p>
        <p className={katCommentStyling}>
          I’ll try and make that as clear as possible
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: I’d get out of debt!
          After that, I would move to this really nice place I went to on
          holiday once called Cadaqués in Spain. It’s a beautiful place directly
          opposite the sea, and it's so blue and beautiful. I’d move there and
          not give a shit about anything ever again.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: For my serious
          answer, I would move to Ireland because I've got this family friend
          who made a fully sustainable house there who pays no bills and lives
          by the seaside. I went there and it was the most idyllic thing.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>Moving on - do you believe in God?</h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: So our old drummer had,
          like, an epiphany/hallucination about God.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: But only when he was
          on shrooms, which is when everybody has it.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: I’m from an Irish
          Catholic background, so I'm not religious at all. It's kind of been
          pushed down my throat enough. It’d be nice if there was something, but
          I'm guaranteeing worm food, that’s the vibe for me.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Does anyone else believe in anything crazy that I can include in
            this?
          </h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: I don’t believe in
          anything that’s absolutely whack, but I came out of a Church of
          England Primary School. I don't believe in God - I’m more of a science
          person - but the Proverbs, and the rules of life that they do teach, I
          do hold on to some of those, like “treat others as you would like to
          be treated.” They do teach generally good values, and I do hold on to
          some of those.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>Do you guys have any hot takes to end this chat?</h2>
        </div>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: The Beatles are shit
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: Okay well, my hot
          take is that Magical Mystery Tour is better than Sergeant Peppers, but
          The Beatles aren't shit.
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Mag</span>: I respect The
          Beatles…but I suppose, if I listened to them in this day and age,
          compared to something that you’d hear in the top 40 -
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>Miles</span>: Compared to the top
          40?! They're better than the top 40!
        </p>
        <p className={artistCommentStyling}>
          <span className={artistNameStyling}>AJ</span>: Is this the reason that
          the Yesterday movie was made, for people like Mag? I still didn’t
          watch it, by the way, because the Beatles are shit. I think unless you
          grew up on The Beatles, you don’t really give a shit about them.
        </p>
      </div>

      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>We’re going to play “This or That.” Virtuous or Guiness?</h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>All</span>: Guinness
          </p>
        </div>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>Spotify or Apple music?</h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>Mag</span>: Spotify's just
            changed their terms and agreements, and they can get fucked now.
            They own your songs now as soon as you submit them.
          </p>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>AJ</span>: Apple Music
          </p>
        </div>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>Cats or Dogs?</h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>AJ & Mag</span>: Dogs
          </p>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>Miles</span>: Agnostic! I’ve
            only ever owned a cat.
          </p>
        </div>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>ADHD or Autism?</h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>AJ</span>: Well, you’ve got ADHD
            [points at Mag], and I’ve clearly got autism.
          </p>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>Miles</span>: And I’ve been
            diagnosed by other people as having both.
          </p>
        </div>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>North or South?</h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>AJ & Mag</span>: North
          </p>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>Miles</span>: South, south all
            the way baby!
          </p>
        </div>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Obviously, this is the most important question - Israel or
            Palestine?
          </h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>All</span>: Palestine!
          </p>
        </div>
      </div>
      <div className={sectionStyling}>
        <div className={subtitleStyling}>
          <h2>
            Is there anything else you’d like to talk about before we end this
            interview?
          </h2>
        </div>
        <div className={sectionContentStyling}>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>AJ</span>: Our new single is out
            on the 3rd October, and we’re planning after the New Year to release
            an EP. We've been in the studio recording that.
          </p>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>Mag</span>: We've got lots of
            future plans, too. We’re playing Live at Leeds in the City on
            November 15th, on the Leeds Beckett Stage.
          </p>
          <p className={artistCommentStyling}>
            <span className={artistNameStyling}>Miles</span>: I think with every
            band, you're kind of living in the future of what your sound will be
            like, so it’s exciting to be at that point where we have the future
            things planned. And we know that it is - at least to us - even
            better than how it is right now.
          </p>
        </div>
        <div className="my-8">
          <p className="text-lg">
            No Cameo’s latest single, ‘Win A Fortune’, is out now on all
            streaming platforms. You can catch them playing Live at Leeds in the
            City on November 15th.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
