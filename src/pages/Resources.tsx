import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  MessageSquare, 
  Users, 
  Stethoscope, 
  BookOpen, 
  Volume2, 
  Eye,
  Play,
  Pause,
  RotateCcw,
  Waves
} from "lucide-react";

const Resources = () => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState("ocean");

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential emotional support",
      availability: "24/7"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free crisis support via text message",
      availability: "24/7"
    },
    {
      name: "National Alliance on Mental Illness",
      number: "1-800-950-NAMI (6264)",
      description: "Information, support, and resources",
      availability: "Mon-Fri 10am-10pm ET"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      availability: "24/7"
    }
  ];

  const professionalHelp = [
    {
      title: "Psychology Today",
      description: "Find therapists, psychiatrists, and support groups in your area",
      url: "psychologytoday.com",
      type: "Directory"
    },
    {
      title: "BetterHelp",
      description: "Online therapy platform with licensed therapists",
      url: "betterhelp.com",
      type: "Online Therapy"
    },
    {
      title: "Talkspace",
      description: "Text-based therapy and video sessions",
      url: "talkspace.com",
      type: "Online Therapy"
    },
    {
      title: "Open Path Collective",
      description: "Affordable therapy sessions ($30-$60)",
      url: "openpathcollective.org",
      type: "Affordable Care"
    }
  ];

  const educationalResources = [
    {
      title: "Mental Health America",
      description: "Comprehensive mental health information and screening tools",
      topics: ["Depression", "Anxiety", "Bipolar", "PTSD"]
    },
    {
      title: "National Institute of Mental Health",
      description: "Research-based information on mental health conditions",
      topics: ["Research", "Treatment", "Statistics", "Clinical Trials"]
    },
    {
      title: "Mindfulness Apps",
      description: "Digital tools for meditation and mindfulness practice",
      topics: ["Headspace", "Calm", "Insight Timer", "Ten Percent Happier"]
    }
  ];

  const supportGroups = [
    {
      name: "NAMI Support Groups",
      description: "Peer-led support groups for individuals and families",
      format: "In-person & Virtual"
    },
    {
      name: "Depression and Bipolar Support Alliance",
      description: "Support groups for mood disorders",
      format: "In-person & Online"
    },
    {
      name: "Anxiety and Depression Association",
      description: "Support groups for anxiety and depression",
      format: "Online"
    },
    {
      name: "7 Cups",
      description: "Free emotional support and counseling",
      format: "Online Chat"
    }
  ];

  const natureSounds = [
    { name: "Ocean Waves", description: "Calming ocean sounds", icon: "🌊" },
    { name: "Forest Rain", description: "Gentle rain in the forest", icon: "🌲" },
    { name: "Mountain Stream", description: "Peaceful flowing water", icon: "🏔️" },
    { name: "Thunderstorm", description: "Distant thunder and rain", icon: "⛈️" },
    { name: "Birds & Breeze", description: "Birds chirping with gentle wind", icon: "🐦" },
  ];

  const visualScenes = [
    {
      name: "ocean",
      title: "Peaceful Ocean",
      description: "Watch gentle waves on a serene beach",
      gradient: "from-blue-400 via-blue-300 to-cyan-200"
    },
    {
      name: "forest",
      title: "Tranquil Forest",
      description: "Sunlight filtering through green trees",
      gradient: "from-green-400 via-green-300 to-emerald-200"
    },
    {
      name: "mountain",
      title: "Mountain Vista",
      description: "Majestic peaks under a clear sky",
      gradient: "from-purple-400 via-indigo-300 to-blue-200"
    },
    {
      name: "sunset",
      title: "Golden Sunset",
      description: "Warm colors painting the sky",
      gradient: "from-orange-400 via-pink-300 to-purple-200"
    }
  ];

  const affirmations = [
    "I am worthy of love and respect",
    "I have the strength to overcome challenges",
    "I am growing and learning every day",
    "My feelings are valid and important",
    "I choose peace and calm in this moment",
    "I am capable of creating positive change",
    "I deserve happiness and well-being"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Support Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with professional help, find support communities, and explore calming tools for your wellness journey
          </p>
        </div>

        <Tabs defaultValue="crisis" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
            <TabsTrigger value="crisis">Crisis Support</TabsTrigger>
            <TabsTrigger value="professional">Professional Help</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="audio">Nature Sounds</TabsTrigger>
            <TabsTrigger value="visual">Visualizations</TabsTrigger>
          </TabsList>

          {/* Crisis Support */}
          <TabsContent value="crisis">
            <div className="space-y-6">
              <Card className="calm-card p-8 bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/20">
                <div className="text-center mb-6">
                  <Phone className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Immediate Crisis Support
                  </h2>
                  <p className="text-muted-foreground">
                    If you're in crisis or having thoughts of suicide, please reach out immediately. 
                    You are not alone, and help is available 24/7.
                  </p>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {crisisResources.map((resource, index) => (
                  <Card key={index} className="calm-card p-6 hover:shadow-soft transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-destructive text-destructive-foreground p-3 rounded-xl flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {resource.name}
                        </h3>
                        <div className="text-xl font-bold text-destructive mb-2">
                          {resource.number}
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                          Available: {resource.availability}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="calm-card p-6 bg-gradient-to-r from-primary-soft/20 to-serenity/20">
                <div className="text-center">
                  <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Remember: Seeking help is a sign of strength
                  </h3>
                  <p className="text-muted-foreground">
                    Your life matters, and there are people who care about you. These resources are 
                    staffed by trained professionals who understand what you're going through.
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Professional Help */}
          <TabsContent value="professional">
            <div className="space-y-8">
              <div className="text-center">
                <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Professional Mental Health Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Connect with licensed therapists, counselors, and mental health professionals 
                  who can provide personalized support and treatment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professionalHelp.map((service, index) => (
                  <Card key={index} className="calm-card p-6 hover:shadow-soft transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-xl flex-shrink-0">
                        <Stethoscope className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {service.title}
                          </h3>
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs">
                            {service.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {service.description}
                        </p>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                          Visit {service.url}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="calm-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  What to Expect in Therapy
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="bg-primary/20 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Safe Space</h4>
                    <p className="text-muted-foreground text-sm">
                      A confidential environment to share your thoughts and feelings
                    </p>
                  </div>
                  <div>
                    <div className="bg-accent/20 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <BookOpen className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Learn Skills</h4>
                    <p className="text-muted-foreground text-sm">
                      Develop healthy coping strategies and emotional regulation tools
                    </p>
                  </div>
                  <div>
                    <div className="bg-harmony/40 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <Eye className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Gain Insight</h4>
                    <p className="text-muted-foreground text-sm">
                      Better understand yourself and your patterns of thinking
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Community Support */}
          <TabsContent value="community">
            <div className="space-y-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Community Support & Education
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Connect with others who understand your experience and access educational resources 
                  to learn more about mental health.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Support Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {supportGroups.map((group, index) => (
                    <Card key={index} className="calm-card p-6 hover:shadow-soft transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent text-accent-foreground p-3 rounded-xl flex-shrink-0">
                          <Users className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {group.name}
                          </h4>
                          <p className="text-muted-foreground mb-3">
                            {group.description}
                          </p>
                          <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                            {group.format}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Educational Resources</h3>
                <div className="space-y-6">
                  {educationalResources.map((resource, index) => (
                    <Card key={index} className="calm-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-xl flex-shrink-0">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {resource.title}
                          </h4>
                          <p className="text-muted-foreground mb-4">
                            {resource.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {resource.topics.map((topic, topicIndex) => (
                              <span
                                key={topicIndex}
                                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Nature Sounds */}
          <TabsContent value="audio">
            <div className="space-y-8">
              <div className="text-center">
                <Volume2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Calming Nature Sounds
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Listen to peaceful nature sounds to reduce stress and promote relaxation
                </p>
              </div>

              <Card className="calm-card p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">
                    {natureSounds[currentAudioIndex].icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {natureSounds[currentAudioIndex].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {natureSounds[currentAudioIndex].description}
                  </p>
                </div>

                <div className="flex justify-center gap-4 mb-8">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-soft"
                  >
                    {isPlaying ? <Pause className="h-6 w-6 mr-2" /> : <Play className="h-6 w-6 mr-2" />}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsPlaying(false)}
                  >
                    <RotateCcw className="h-6 w-6 mr-2" />
                    Stop
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {natureSounds.map((sound, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAudioIndex(index)}
                      className={`p-4 rounded-xl transition-all duration-300 text-center ${
                        currentAudioIndex === index
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      <div className="text-3xl mb-2">{sound.icon}</div>
                      <div className="text-sm font-medium">{sound.name}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-serenity/20 rounded-2xl text-center">
                  <Waves className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Find a comfortable position, close your eyes, and let these natural sounds 
                    transport you to a peaceful place. Focus on your breathing and allow stress to melt away.
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Visual Meditations */}
          <TabsContent value="visual">
            <div className="space-y-8">
              <div className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Calming Visualizations
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Immerse yourself in peaceful scenes and practice guided affirmations
                </p>
              </div>

              <Card className="calm-card p-8">
                <div className="mb-8">
                  <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${visualScenes.find(s => s.name === currentScene)?.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="floating absolute top-4 left-8 w-16 h-16 bg-white rounded-full blur-xl"></div>
                      <div className="floating absolute bottom-8 right-12 w-20 h-20 bg-white rounded-full blur-2xl" style={{ animationDelay: '2s' }}></div>
                      <div className="floating absolute top-20 right-6 w-12 h-12 bg-white rounded-full blur-lg" style={{ animationDelay: '4s' }}></div>
                    </div>
                    <div className="text-center text-white z-10">
                      <h3 className="text-3xl font-bold mb-2">
                        {visualScenes.find(s => s.name === currentScene)?.title}
                      </h3>
                      <p className="text-lg opacity-90">
                        {visualScenes.find(s => s.name === currentScene)?.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {visualScenes.map((scene, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScene(scene.name)}
                        className={`p-4 rounded-xl transition-all duration-300 text-center ${
                          currentScene === scene.name
                            ? "bg-primary text-primary-foreground shadow-soft"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        <div className="font-medium">{scene.title}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-soft/20 to-serenity/20 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4 text-center">
                    Daily Affirmations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {affirmations.map((affirmation, index) => (
                      <div key={index} className="p-4 bg-white/60 rounded-xl text-center">
                        <p className="text-foreground italic">"{affirmation}"</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-soft">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Play Guided Affirmations
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resources;