import { ParallaxSection } from "@/components/parallax-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { type MemoryItem } from "@/components/memory-carousel";
import { EnhancedHero } from "@/components/enhanced-hero";
import { SectionLayout } from "@/components/section-layout";
import { EnhancedCardGrid } from "@/components/enhanced-card-grid";
import { FloatingElements } from "@/components/floating-elements";
import { EnhancedMemories } from "@/components/enhanced-memories";
import { EnhancedTimeline } from "@/components/enhanced-timeline";
import { StickerNotes } from "@/components/sticker-notes";
import { CrumpledNotes } from "@/components/crumpled-notes";
import { SpotifyPlaylist } from "@/components/spotify-playlist";
import { ForgivenessSection } from "@/components/forgiveness-section";

const sections: { id: string; title: string; text: string }[] = [
  {
    id: 'intro',
    title: 'oi',
    text:
      'essa não é a primeira coisa que escrevo para você, mas talvez seja a primeira que realmente faça sentido. sinto que as coisas terminaram de forma incompleta, pelo menos da minha perspectiva. tenho passado meses refletindo sobre tudo que aconteceu entre nós, e cheguei à conclusão de que preciso te pedir desculpas. não conseguiria ter paz comigo mesmo sem fazer isso. sei que pode parecer tarde, mas você ainda ocupa um espaço importante nos meus pensamentos, independente de todo o tempo que passou.'
  },
  {
    id: 'forever',
    title: 'uma conexão que permanece',
    text:
      'reconheço que ainda sinto uma conexão profunda com você, algo que parece transcender o tempo. mesmo depois de tanto tempo, me pego pensando em como as coisas poderiam ter sido diferentes se eu tivesse tido mais maturidade na época. sei que não é realista imaginar um recomeço, mas não posso negar que essa possibilidade já passou pela minha cabeça.'
  },
  {
    id: 'distance',
    title: 'entendo o silêncio',
    text:
      'entendo que você pode não querer mais contato comigo. reconheço que tentei algumas aproximações que não foram correspondidas, e respeito completamente sua escolha. sei que minha presença em sua vida teve momentos bons e ruins, e compreendo se a balança não pende a meu favor.'
  },
  {
    id: 'apology',
    title: 'reconhecendo meus erros',
    text:
      'quero te pedir desculpas por diversas coisas: por não ter agido quando deveria, pela forma como terminamos, pelos momentos em que não fui a pessoa que você merecia. sei que permiti que nosso relacionamento esfriasse várias vezes, e isso foi um erro meu. também reconheço que nem sempre soube interpretar suas necessidades ou expectativas, e que talvez tenha faltado comunicação clara entre nós. é difícil admitir, mas sei que minha imaturidade contribuiu para muitos dos problemas que enfrentamos.'
  },
  {
    id: 'misunderstanding',
    title: 'sobre aquele mal-entendido',
    text:
      'preciso esclarecer algo que sempre me incomodou: aquela situação que você presenciou, onde tirou conclusões sobre mim conversando com outra pessoa. naquele momento específico, não havia nada acontecendo além de uma conversa casual. sei que as aparências podem enganar e entendo sua reação, mas gostaria que soubesse que não era o que parecia. tentei te explicar isso na época mas você não quis saber, esse mal-entendido criou uma ferida entre nós que nunca conseguimos curar adequadamente. O que aconteceu depois em relação a mim, não teve nada a ver com aquele dia, eu te juro que naquele momento eu não estava com ninguém.'
  },
  {
    id: 'learn',
    title: 'aprendizado e crescimento',
    text:
      'sei que não posso mudar o que já aconteceu, mas posso aprender com os erros e crescer como pessoa. tenho me esforçado para isso todos os dias. tentei seguir em frente completamente, mas seria desonesto dizer que consegui te esquecer. você marcou minha vida de forma significativa, e isso é algo que carrego comigo.'
  },
  {
    id: 'nicknames',
    title: 'pequenos detalhes',
    text:
      'existem pequenos detalhes que se tornaram especiais demais para simplesmente esquecer. o jeito carinhoso como você criava apelidos, a entonação particular quando falava "mozoare"... eram gestos simples que ganharam um significado enorme para mim, e que guardo com carinho na memória.'
  },
  {
    id: 'support',
    title: 'admirava sua dedicação',
    text:
      'sempre admirei sua dedicação e comprometimento com tudo que se propunha a fazer. ajudar você, seja nos estudos ou nas tarefas do dia a dia, me dava uma sensação de propósito e proximidade que eu valorizo muito. mesmo nos pequenos detalhes quando eu tentava te ajudar a cozinhar alguma coisa, eu via ali a construção de algo conjunto, uma vida compartilhada. eram momentos simples que ganharam um valor especial.'
  },
  {
    id: 'chance',
    title: 'sem expectativas',
    text:
      'não estou aqui pedindo uma segunda chance, porque entendo que algumas coisas realmente chegam ao fim. seria desonesto não admitir que existe uma parte de mim que imagina como seria se pudéssemos tentar novamente, com mais maturidade, mas respeito o que você decidir. esta carta é sobre encerramento e reconhecimento, não sobre expectativas.'
  },
  {
    id: 'cheer',
    title: 'sempre torcerei por você',
    text:
      'independente do rumo que nossas vidas tomem, quero que saiba que sempre vou torcer pelo seu sucesso e felicidade. você é uma pessoa especial, com um potencial incrível, e mereçe todas as coisas boas que a vida pode oferecer. essa é uma verdade que vai além de qualquer história que tivemos juntos.'
  },
    {
    id: 'love',
    title: 'o que preciso dizer',
    text:
      'seria desonesto terminar esta carta sem reconhecer que ainda tenho sentimentos profundos por você. não sei se isso vai mudar com o tempo, e não espero que isso mude alguma coisa entre nós. é apenas uma verdade que carrego e que faz parte de quem eu sou hoje. o amor que sinto por você me ensinou muito sobre mim mesmo, tanto as qualidades quanto os defeitos. obrigado por ter sido parte da minha jornada. cuide-se sempre.'
  },
  {
    id: 'quote',
    title: '',
    text:
      '"Geleiras vão derreter, estrelas vão se apagar e eu pensando em ter você"'
  }
]

export default function Home() {
  const memories: MemoryItem[] = [
    { id: 'm1', title: 'gestos de carinho', text: 'a forma especial como você criava apelidos que eram só nossos' },
    { id: 'm2', title: 'detalhes únicos', text: 'aquela entonação particular que você usava para certas palavras' },
    { id: 'm3', title: 'admiração genuína', text: 'observar sua dedicação sempre me inspirava e me fazia te admirar mais' },
    { id: 'm4', title: 'momentos cotidianos', text: 'compartilhar as tarefas simples do dia a dia, construindo algo juntos' },
    { id: 'm5', title: 'sonhos compartilhados', text: 'quando planejávamos um futuro em comum, cheio de detalhes e expectativas' },
    { id: 'm6', title: 'conexão simples', text: 'noites tranquilas vendo filmes, aproveitando a companhia um do outro' },
  ]
  
  return (
    <div className="min-h-dvh w-full overflow-x-hidden">
      <FloatingElements />
      
      {/* Enhanced Hero */}
      <EnhancedHero />

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(120,120,120,0.02)_60deg,transparent_120deg)]" />

        <SectionLayout variant="narrow" spacing="xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 bg-clip-text text-transparent">
                uma carta necessária
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24" />
                <div className="mx-4 h-2 w-2 rounded-full bg-slate-400" />
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24" />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                cada palavra aqui foi pensada e repensada, numa tentativa de organizar sentimentos e pensamentos que ficaram pendentes. <br /> não conseguiria ter paz sem compartilhar isso com você.
              </p>
              <p className="text-sm text-muted-foreground/60 font-mono">
                não há expectativa de resposta ou retomada de contato. apenas senti que você merecia saber o que penso sobre tudo que vivemos. escolhi esta forma porque acredito ser mais respeitosa que uma abordagem direta.
              </p>
            </div>
          </ScrollReveal>
          <EnhancedCardGrid sections={sections} />
        </SectionLayout>

        {/* Enhanced Memories Section */}
        <EnhancedMemories memories={memories} />

        {/* Spotify Playlist Section */}
        <SpotifyPlaylist />

        {/* Sticker Notes Section */}
        <StickerNotes />

        {/* Crumpled Notes Section */}
        <CrumpledNotes />

        {/* Enhanced Timeline */}
        <EnhancedTimeline />

        <ParallaxSection className="relative min-h-[50svh] grid place-items-center px-6 py-20 text-center bg-gradient-to-br from-background to-muted/20" strength={120}>
          <div className="max-w-3xl mx-auto space-y-8">
            <ScrollReveal y={20} delay={0.3}>
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-16" />
                <div className="mx-4 h-1 w-1 rounded-full bg-slate-400" />
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-16" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal y={12} delay={0.5}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 bg-clip-text text-transparent leading-tight">
                desejo sempre o seu melhor.
              </p>
            </ScrollReveal>
            <ScrollReveal y={12} delay={0.7}>
              <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                independente dos caminhos que nossas vidas tomem, carrego comigo a sincera torcida pelo seu sucesso e felicidade. você mereçe todas as coisas boas que a vida pode oferecer.
              </p>
            </ScrollReveal>
          </div>
        </ParallaxSection>

        {/* Forgiveness Section */}
        <ForgivenessSection />
        </div>
    </div>
  );
}
