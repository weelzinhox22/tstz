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
      'oi, essa é a milésima coisa que escrevo para você e não sei como te mostrar ou se devo mostrar, mas... eu acho que as coisas ficaram mal resolvidas, pelo menos pra mim, são dias sem dormir direito, eu acho que te devo desculpa por tudo que aconteceu, e eu acho que não pedi, de uns meses pra cá eu não consigo esquecer tudo, então tive que escrever isso, eu espero muito que você veja tudo... você não sai da minha cabeça, eu não consigo parar de pensar em você, não importa quanto tempo passe, não importa o que tenha acontecido, você simplesmente não sai da minha cabeça.'
  },
  {
    id: 'forever',
    title: 'talvez pra sempre seu',
    text:
      'Parece que eu vou ser para sempre seu, parece que é algo de outra vida, é impossivel, tem tantos anos já e eu sempre me pego pensando em você, isso é absurdo, eu queria muito poder recomeçar do zero, esquecendo tudo que passou, recomeçar com uma nova mentalidade, só eu e você, mas sei que isso não é possível.'
  },
  {
    id: 'distance',
    title: 'sinais e mais sinais',
    text:
      'Sei que você não está nem aí, comigo não deve mais se importar, afinal, já dei alguns sinais que queria ao menos falar com você, e nenhum deles foram retribuídos, e tudo bem... não te julgo, sei o que eu fui na sua vida, tanto pro lado bom, quanto pro ruim.'
  },
  {
    id: 'apology',
    title: 'desculpa',
    text:
      'Eu na verdade só queria te pedir desculpa por tudo, desculpa por não ter feito nada quando deveria ter feito, desculpa pela forma como terminamos, desculpa pela forma como eu fui, desculpa pelo que você achou quando terminamos, desculpa por ter deixado nosso relacionamento esfriar tantas vezes, mas também porra, era pra você me ajudar 🙄👍🏾, nem sempre eu vou estar 100%, eu precisava que você completasse a % nesses dias, nem sempre eu queria sair, mas eu iria se você quisesse. E você queria, mas não me falava, eu não tinha como adivinhar essas coisas (falando sobre a ultima vez, eu tenho a lembrança de que em algum momento eu tentei de esclarecer coisas e lembro que no dia você não estava muito adepta a isso).'
  },
  {
    id: 'learn',
    title: 'aprender pro futuro',
    text:
      'Enfim, não adianta ficar voltando no passado tentando consertar o que já passou, o importante é aprender para o futuro, e eu tenho tentado. Tentei seguir em frente, mas não deu, não dá para esquecer você.'
  },
  {
    id: 'nicknames',
    title: 'mozamore',
    text:
      'não dá pra esquecer os apelidos, eu simplesmente amava quando você me chamava de "mozamore" ou quando entonava e falava "mozoare", você não tem noção do quanto eu gostava disso.'
  },
  {
    id: 'support',
    title: 'eu gostava de te ajudar',
    text:
      'Você não tem noção do quanto eu gostava de ajudar você, te incentivar nos seus estudos, ajudar você em qualquer coisa sempre foi tão bom pra mim, ver sua dedicação, seu comprometimento com o que você se propôs a fazer, eu gostava até mesmo ajudar a limpar a casa, "ajudar" a cozinhar, pq vc não deixava eu fazer nada e qd eu fazia ainda reclamava vei, coisas simples do dia a dia mesmo, só ficava imaginando a gente na nossa casa dividindo as tarefas.'
  },
  {
    id: 'chance',
    title: 'não peço outra chance',
    text:
      'Por fim, não tô pedindo outra chance porque sei que não mereço (mas devo admitir que eu queria, espero que se existir outra vida, outro universo, sei la, eu espero que pelo menos lá eu e você tenhamos ficado juntos).'
  },
  {
    id: 'cheer',
    title: 'eu torço por você',
    text:
      'Saiba que independente de se nossos caminhos se cruzarem novamente ou não, eu sempre vou torcer por você, sempre vou desejar o seu bem e quero sempre ouvir coisas boas a seu respeito.'
  },
  {
    id: 'jealous',
    title: 'se for namorar outra pessoa...',
    text:
      'a eu ia falar um ngc aqui mas resolvi apagar, então vou deixar só o final... Na verdade oxe, não namore com ninguém não 👍🏾'
  },
    {
    id: 'love',
    title: 'você vai ser pra sempre minha pessoa',
    text:
      'Bom, acho que aqui eu devia colocar que te amo né, vendo tudo que tá acontecendo na minha cabeça e no meu peito, não tenho como negar, eu acho que vou estar para sempre preso em você, você sempre volta pra minha mente, não importa quanto tempo passe. me desculpa por tudo, desejo tudo de melhor na sua vida sempre! se cuida, meu bem. 💖'
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
    { id: 'm1', title: 'mozamore', text: 'eu amava quando você me chamava assim 💘' },
    { id: 'm2', title: 'mozoare', text: 'quando você falava com aquela entonação' },
    { id: 'm3', title: 'que mulher, viu', text: 'ver sua dedicação me fazia gostar ainda mais de você' },
    { id: 'm4', title: 'casa', text: 'amava ajudar você a fazer as coisas' },
    { id: 'm5', title: 'planos', text: 'sonhavam com nossa vida juntos, nossa casinha, nossos gatos, nossa filhinha, cecilia...' },
    { id: 'm6', title: 'filmes', text: 'amava nossas noites assistindo filmes' },
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
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-pink-600 to-purple-600 bg-clip-text text-transparent">
                minha carta para você
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-24" />
                <div className="mx-4 h-2 w-2 rounded-full bg-pink-400" />
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-24" />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Cada palavra aqui é mais ou menos como eu estou me sentindo agora. <br /> Cada coisinha foi feita a mão, tudo tentando transmitir o que eu quero te dizer.
              </p>
              <p className="text-sm text-muted-foreground/60 font-mono">
                lembrando que você não precisa me responder ou voltar a falar comigo caso não queira, não sabia como te dizer o que eu queria, achei que isso seria melhor que tentar te falar diretamente.
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
                <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16" />
                <div className="mx-4 h-1 w-1 rounded-full bg-pink-400" />
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-16" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal y={12} delay={0.5}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                eu torço por você, sempre.
              </p>
            </ScrollReveal>
            <ScrollReveal y={12} delay={0.7}>
              <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                independente de tudo, você sempre terá meu apoio, não que você precise dele, mas é só pra te lembrar que eu sempre vou estar aqui.
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
