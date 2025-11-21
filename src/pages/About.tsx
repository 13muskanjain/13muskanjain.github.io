import { useState, useRef, useEffect } from 'react';

const About = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className={`flex-1 h-screen overflow-y-auto bg-[#0F0F0F] text-white py-12 px-4 sm:px-6 lg:px-8 ${isScrolling ? 'scrollbar-visible' : 'scrollbar-hidden'}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-400">
            DevOps Engineer / Software Engineer
          </p>
        </div>

        {/* It started with a choice */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            It started with a choice
          </h2>
          <p className="text-lg font-semibold text-gray-300 mb-6">
            and the best gut feeling I ever had
          </p>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              8th grade. Had to pick an elective - language subject or Computer Science.
            </p>
            
            <p>
              Everyone around me was picking the language option. "It's easier," they said. "Less work."
            </p>
            
            <p>
              But something about Computer Science just pulled me in. I didn't want another language subject - I wanted to know how computers actually <em>worked</em>. What makes them tick. What you can build with them.
            </p>
            
            <p>
              So I went with Computer Science.
            </p>
            
            <p className="font-semibold">
              Best decision ever.
            </p>
          </div>
        </section>

        {/* Then I wrote this */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Then I wrote this:
          </h3>
          
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
            cout &lt;&lt; "Hello World";
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Watching those words appear on screen because <em>I</em> made it happen?
            </p>
            
            <p>
              That was it. I was hooked.
            </p>
            
            <p>
              Started acing every test. Perfect scores in theory and practicals. Not because I was cramming, but because I genuinely <em>enjoyed</em> it.
            </p>
            
            <p>
              Computer lab wasn't a chore - it was the highlight of my week.
            </p>
            
            <p>
              That's when I knew this wasn't just a subject. This was what I wanted to do.
            </p>
            
            <p>
              Even in 11th and 12th grade, when I was supposed to be grinding Physics, Chemistry, and Maths for engineering entrance exams, I kept gravitating back to code. Finish my other homework and jump straight into programming. Writing programs, solving problems, building little projects. Couldn't help it.
            </p>
            
            <p>
              Sometimes I think back to that choice in 8th grade - picking Computer Science when everyone else went the other way.
            </p>
            
            <p>
              That one decision set everything in motion. My Bachelor's in Computer Science. My Master's. My career building production systems and cloud infrastructure.
            </p>
            
            <p>
              Nearly 5 years later, I'm working with AWS, Kubernetes, microservices, DevOps pipelines - doing exactly what I love.
            </p>
            
            <p className="font-semibold">
              All because I trusted that gut feeling and went with Computer Science.
            </p>
            
            <p className="font-semibold">
              Zero regrets.
            </p>
          </div>
        </section>

        {/* The moment everything clicked */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            The moment everything clicked
          </h2>
          <p className="text-sm text-purple-600 font-semibold mb-4">~2015</p>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Got my first smartphone in 10th grade. Set up my Gmail account and saw this: "15 GB of free Google Drive storage."
            </p>
            
            <p>
              Wait. What?
            </p>
            
            <p>
              Where is this data even going if it's not on my phone? I kept digging. Servers. Data centers. Cloud computing. The whole concept blew my mind.
            </p>
            
            <p>
              My photos, documents, everything - just... <em>somewhere</em>. Accessible from anywhere. How does that even work at scale?
            </p>
            
            <p>
              That curiosity never went away. It just got more focused.
            </p>
          </div>
        </section>

        {/* The CSS revelation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            The CSS revelation
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Started building websites during my Bachelor's. Spent hours trying to center a div (if you know, you know).
            </p>
            
            <p>
              But here's what really hit me: those smooth animations you see on every website? That button hover effect you don't even notice? That tiny loading spinner?
            </p>
            
            <p>
              All of that takes actual code. Someone sat down and built that.
            </p>
            
            <p>
              I started noticing everything. Every website I visited, I'd right-click, inspect element, and just... explore. How did they do that transition? What's making this load so fast?
            </p>
            
            <p>
              Appreciation for good UI/UX became a whole thing for me.
            </p>
          </div>
        </section>

        {/* Decided to go all in */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Decided to go all in
          </h2>
          <p className="text-lg font-semibold text-gray-300 mb-6">
            Bachelor's in Computer Science with Cloud Specialization
          </p>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Chose cloud computing as my specialization because that 15 GB Google Drive question from 10th grade? Still wasn't fully answered.
            </p>
            
            <p>
              Learned about AWS, Azure, distributed systems, how Netflix serves millions without crashing, how Spotify loads your playlists instantly. The architecture behind it all.
            </p>
            
            <p>
              Built projects. Broke things. Fixed them. Learned that "works on my machine" isn't actually good enough.
            </p>
            
            <p>
              Got perfect scores again, but more importantly - got comfortable with being uncomfortable. That feeling of staring at an error for hours and finally figuring it out? Addictive.
            </p>
            
            <p>
              But I knew I wasn't done learning.
            </p>
          </div>
        </section>

        {/* Came to the US for my Master's */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Came to the US for my Master's
          </h2>
          <p className="text-lg font-semibold text-gray-300 mb-6">
            University of Texas at Arlington
          </p>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Wanted to learn from people smarter than me. Wanted to see how things worked at scale in the US tech industry. Wanted to push myself harder.
            </p>
            
            <p>
              Master's wasn't just more classes. It was learning to think differently. Problem-solving under pressure. Working with people from completely different backgrounds. Realizing that good code isn't just code that works - it's code that others can read, maintain, and build on.
            </p>
            
            <p>
              The projects got harder. The stakes felt real. But that's exactly what I needed.
            </p>
            
            <p>
              Also, the Texas heat in August? India prepared me well for that. But the AC everywhere? Still not used to freezing indoors while it's 100°F outside.
            </p>
          </div>
        </section>

        {/* Then came the real world */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Then came the real world
          </h2>
          
          {/* Intel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              Intel Corporation - Where it got real
            </h3>
            <p className="text-gray-400 mb-4">India | 2021-2022</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                First job. First time my code actually mattered beyond grades.
              </p>
              
              <p>
                Writing C++ and Python diagnostic tools for semiconductor validation. This wasn't "build a feature and move on." This was code running in manufacturing environments. Mess up? Production delays. Actual consequences.
              </p>
              
              <p>
                Learned what "performance" actually means when your tool needs to validate thousands of chips. Learned that clever code isn't always good code - readable, maintainable code is.
              </p>
              
              <p>
                Also learned that corporate life has... a lot of meetings. So many meetings.
              </p>
              
              <p>
                But the real lesson? How to write code that works reliably, not just code that works once.
              </p>
            </div>
          </div>

          {/* SWIFTE */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              SWIFTE - Startup chaos (loved every bit of it)
            </h3>
            <p className="text-gray-400 mb-4">Arlington, TX | 2022-2023</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Came back to the US. Joined a startup. Complete 180 from Intel.
              </p>
              
              <p>
                No massive teams. No 15-step approval processes. Just "we need this feature by Friday" and you figure it out.
              </p>
              
              <p>
                One day I'm building React components with Redux state management. Next day I'm deploying to Azure Kubernetes. Then I'm on a call with a client explaining why their payment integration broke.
              </p>
              
              <p>
                Wore every hat imaginable. Frontend, backend, DevOps, even some customer support. That's startup life.
              </p>
              
              <p>
                The pace was intense. Code I wrote Monday would be live by Wednesday. See a bug? Fix it now, not next sprint.
              </p>
              
              <p>
                Learned to move fast. Learned to make decisions with incomplete information. Learned that "perfect" code ships never - good enough code ships and gets iterated.
              </p>
              
              <p>
                That startup hustle? Taught me more in 8 months than I learned in 2 years of coursework.
              </p>
            </div>
          </div>

          {/* Oracle */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              Oracle Corporation - Enterprise scale hit different
            </h3>
            <p className="text-gray-400 mb-4">Texas | 2023-2024</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                From startup chaos to enterprise precision.
              </p>
              
              <p>
                This is where I learned what "scale" actually means. 5 million daily transactions. APIs handling hundreds of thousands of requests per second. Systems that <em>cannot</em> go down because entire business operations depend on them.
              </p>
              
              <p>
                Built RESTful and GraphQL APIs with Spring Boot, Hibernate, Kafka. Implemented Redis caching strategies. Migrated on-premises Oracle databases to AWS RDS and DynamoDB - cutting query times by 40%.
              </p>
              
              <p>
                Every single line of code I wrote went through reviews, testing, staging, more testing, then production. No cowboy deployments here.
              </p>
              
              <p>
                Learned that boring technology choices are usually the smart ones. Learned that good architecture saves you from disasters months later. Learned that documentation isn't optional when 12 microservices need to talk to each other.
              </p>
              
              <p>
                Also learned that at a certain scale, even a 50ms latency improvement matters. A lot.
              </p>
            </div>
          </div>

          {/* Compunnel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              Compunnel Inc. - Current chapter
            </h3>
            <p className="text-gray-400 mb-4">Dallas, TX | 2025-Present</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Right now, I'm living in the sweet spot between development and operations - DevOps engineering.
              </p>
              
              <p>
                Building and managing production infrastructure with AWS EKS, Kubernetes, Helm, Terraform, Argo CD. Not just writing code, but making sure it deploys smoothly, scales automatically, and doesn't wake anyone up at 3 AM.
              </p>
              
              <p>
                Reduced deployment time by 40% through automated CI/CD pipelines with Jenkins and GitHub Actions. Cut infrastructure provisioning from 2 hours to 15 minutes using Terraform automation.
              </p>
              
              <p>
                Integrated OWASP security scanning into pipelines - catching vulnerabilities before they hit production. Because finding a security issue in code review is way better than finding it in production.
              </p>
              
              <p>
                Also migrated a legacy .NET monolith to Spring Boot and Node.js microservices. Improved API response times by 25% while handling 2+ million daily requests.
              </p>
              
              <p>
                The work is challenging. Multi-cloud environments. HIPAA compliance. SOC 2 requirements. Zero-downtime deployments. Making complex infrastructure simple for developers to use.
              </p>
              
              <p>
                But that's exactly what I signed up for. Building systems that just work. Making deployments boring (in a good way). Solving problems before they become fires.
              </p>
              
              <p>
                This is where I'm at. And honestly? Loving it.
              </p>
            </div>
          </div>
        </section>

        {/* What actually gets me excited */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What actually gets me excited
          </h2>
          <p className="text-lg text-gray-400 mb-8">Beyond the resume points</p>
          
          {/* Cloud infrastructure */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Cloud infrastructure that just works
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                There's something deeply satisfying about designing systems that handle millions of requests without breaking. Load balancing, auto-scaling, fault tolerance - this is the stuff I think about.
              </p>
              
              <p>
                AWS, Kubernetes, Terraform - this is where code meets reality. You're not just writing functions; you're orchestrating entire environments. Making infrastructure reproducible. Making deployments predictable.
              </p>
              
              <p>
                Infrastructure as Code is beautiful. Version-controlled infrastructure. Automated everything. No manual SSH-ing into servers.
              </p>
            </div>
          </div>

          {/* The DevOps mindset */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              The DevOps mindset
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I love the space between development and operations. Building isn't enough - you need to ship it, monitor it, scale it, and keep it running.
              </p>
              
              <p>
                CI/CD pipelines that actually work. Security scanning before code hits production. Zero-downtime deployments. Observability that tells you what's wrong before users notice.
              </p>
              
              <p>
                That's the fun part.
              </p>
            </div>
          </div>

          {/* Automation */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Automation is everything
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm all about automating repetitive, everyday tasks so we can concentrate on the important stuff.
              </p>
              
              <p>
                Manual deployments? Automate them. Repetitive testing? Automate it. Infrastructure provisioning? Terraform. Code reviews for common issues? Lint rules and CI checks.
              </p>
              
              <p>
                The goal isn't just to save time - it's to eliminate human error, make processes reproducible, and free up mental space for solving actual problems.
              </p>
              
              <p>
                If I'm doing something more than twice, I'm thinking about how to automate it.
              </p>
            </div>
          </div>

          {/* Making complex things simple */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Making complex things simple
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Anyone can make something complicated. The real challenge? Making complex systems simple to use. Clean APIs. Good abstractions. Infrastructure that developers don't have to think about.
              </p>
              
              <p>
                When someone deploys code and it just works - that's the goal.
              </p>
            </div>
          </div>
        </section>

        {/* Right now in my life */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Right now in my life
          </h2>
          
          {/* Working at Compunnel */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Working at Compunnel
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Building production-grade cloud infrastructure. Migrating legacy systems. Automating everything that can be automated.
              </p>
              
              <p>
                Day-to-day? Kubernetes clusters, Terraform configs, CI/CD pipelines, security compliance, microservices deployments. Making sure things don't break. And when they do, fixing them fast.
              </p>
              
              <p>
                Also working with teams, explaining architecture decisions, reviewing code, and making sure we're building things that last.
              </p>
            </div>
          </div>

          {/* Always learning */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Always learning
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Right now exploring:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Advanced Kubernetes patterns</li>
                <li>Infrastructure security best practices</li>
                <li>System design at scale</li>
                <li>Go for microservices (because sometimes Java is just... too much)</li>
              </ul>
              
              <p className="mt-4">
                Reading whitepapers, following DevOps blogs, experimenting with new tools. The learning never stops.
              </p>
            </div>
          </div>

          {/* Looking for what's next */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Looking for what's next
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm authorized to work in the US (STEM OPT). Can relocate anywhere across the US.
              </p>
              
              <p>Looking for teams that care about:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Building things that actually work in production</li>
                <li>Engineering excellence over quick hacks</li>
                <li>Good infrastructure practices</li>
                <li>Impact over just shipping features</li>
              </ul>
              
              <p className="mt-4">
                Want to work somewhere where my input matters. Where I can take ownership. Where I can make things better.
              </p>
            </div>
          </div>
        </section>

        {/* Life beyond code */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Life beyond code
          </h2>
          
          {/* Velvet Taco */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🌮</span> Velvet Taco
            </h3>
            
            <div className="space-y-2 text-gray-300 leading-relaxed">
              <p>
                Honestly? This might be the only thing that makes me want to stay in Texas.
              </p>
              
              <p>
                If you haven't tried it yet, you're missing out on a lot.
              </p>
              
              <p>
                And if you have, you know why.
              </p>
            </div>
          </div>

          {/* Music while coding */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🎵</span> Music while coding
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Bollywood soundtracks when I need focus. Lo-fi when debugging. Complete silence when something's seriously broken.
            </p>
          </div>

          {/* Binge-watching patterns */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>📺</span> Binge-watching patterns
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Tech documentaries on weekends. Startup stories. How things are built. Also guilty of rewatching The Office when I need something familiar.
            </p>
          </div>

          {/* Staying connected */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🌍</span> Staying connected
            </h3>
            
            <div className="space-y-2 text-gray-300 leading-relaxed">
              <p>
                Celebrating Diwali, Holi, and other festivals even when I'm far from home. FaceTiming family during Indian mornings (which is midnight here - sleep schedule is a myth).
              </p>
              
              <p>
                Cooking Indian food because sometimes you just need proper desi khana.
              </p>
            </div>
          </div>

          {/* Staying active */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>💪</span> Staying active
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Gym, yoga, and Pilates help clear the mind after debugging sessions. Also, sitting and coding for 8+ hours isn't great for your back. Learned that the hard way.
            </p>
          </div>

          {/* Plant parent life */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🌱</span> Plant parent life
            </h3>
            
            <div className="space-y-2 text-gray-300 leading-relaxed">
              <p>
                I collect plants. My apartment is slowly turning into a jungle, and I'm not mad about it. There's something calming about taking care of them - watering, repotting, watching them grow.
              </p>
              
              <p>
                Plus, they make great desk companions during long coding sessions. Much better listeners than rubber ducks.
              </p>
            </div>
          </div>
        </section>

        {/* The honest truth */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            The honest truth
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm at that stage where I've built enough to know what I'm good at, but still learning enough to know how much I don't know.
            </p>
            
            <p>
              Nearly 5 years of building production systems. Cloud infrastructure. Microservices. DevOps pipelines. AWS certified. Worked across startups and enterprise.
            </p>
            
            <p>
              But I'm not claiming I have it all figured out. Still learning. Still growing. Still making mistakes and learning from them.
            </p>
            
            <p>
              The journey from "Hello World" to building systems handling millions of requests? That's been wild.
            </p>
            
            <p className="font-semibold">
              And honestly? I'm just getting started.
            </p>
          </div>
        </section>

        {/* Quick facts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Quick facts about me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Current workflow</p>
              <p className="text-gray-300 text-sm">VS Code + Terminal + way too many tabs open</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Debugging style</p>
              <p className="text-gray-300 text-sm">Console.log everywhere (don't judge)</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Hot take</p>
              <p className="text-gray-300 text-sm">Vim vs VSCode debates are pointless. Use what works for you.</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Deployment philosophy</p>
              <p className="text-gray-300 text-sm">If you're not scared before deploying to production, you're not paying attention</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Learning approach</p>
              <p className="text-gray-300 text-sm">Break it, fix it, understand why it broke</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Work authorization</p>
              <p className="text-gray-300 text-sm">STEM OPT</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold text-white mb-1">Relocation</p>
              <p className="text-gray-300 text-sm">Open to anywhere in the US</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
