import { Zodiac, astro } from './zodiac';

export interface TarotCards {
  name: string;
  imgUrl: string;
  description: string;
  astro?: Zodiac;
}

export const tarotCards: TarotCards[] = [
  {
    name: `The Fool (0)`,
    imgUrl: `/RWS_Tarot_00_Fool.jpg`,
    description: `Fresh start, beginner, lack of wisdom`
  },
  {
    name: `The Magician (1)`,
    imgUrl: `/RWS_Tarot_01_Magician.jpg`,
    description: `Manifesting, innovator, creating things and putting things in view, (positive or negative) manipulation. `
  },
  {
    name: `The High Priestess (2)`,
    imgUrl: `/RWS_Tarot_02_High_Priestess.jpg`,
    description: `Wisdom, silent knowledge, intuition,
      higher understanding; basically, the book of Proverbs.
      Knows the esoteric truths of reality/ situations.`
  },
  {
    name: `The Empress (3)`,
    imgUrl: `/RWS_Tarot_03_Empress.jpg`,
    description: `Life giving, fertility, growth and abundance. Flourishing; wife material, maternal instinct.`
  },
  {
    name: `The Emperor (4)`,
    imgUrl: `/RWS_Tarot_04_Emperor.jpg`,
    description: `Rules and structure; father energy, ruler of his domain, leader, masculine principle and drive.`,
    astro: astro[0]
  },
  {
    name: `The Hierophant (5)`,
    imgUrl: `/RWS_Tarot_05_Hierophant.jpg`,
    description: `Knowing the objective truth and rules of life and spirituality,
       following the path laid down by deep truth and spiritual traditions. `,
    astro: astro[1]
  },
  {
    name: `The Lovers (6)`,
    imgUrl: `/RWS_Tarot_06_Lovers.jpg`,
    description: `Love, union, connection, a relationship, a family bond, romance. Sometimes it can mean a decision.`,
    astro: astro[2]
  },
  {
    name: `The Chariot (7)`,
    imgUrl: `/RWS_Tarot_07_Chariot.jpg`,
    description: `Moving forward, fierce determination, action, continuing forward to objectives with haste,
     direction. Moving with the essence of one's primitive forces`,
    astro: astro[3]
  },
  {
    name: `Strength (8)`,
    imgUrl: `/RWS_Tarot_08_Strength.jpg`,
    description: `Force, self-control, self-mastery, gentle and firm strength, Kindness to self and others.`,
    astro: astro[4]
  },
  {
    name: `The Hermit (9)`,
    imgUrl: `/RWS_Tarot_09_Hermit.jpg`,
    description: `Solitude, deep reflection, inner meditation, personal spirituality.`,
    astro: astro[5]
  },
  {
    name: `Wheel of Fortune (10)`,
    imgUrl: `/RWS_Tarot_10_Wheel_of_Fortune.jpg`,
    description: `The wheel of God's Fate.It is the interface God uses
      to apply fate to life and reality.God is in control of its effects directly.`
  },
  {
    name: `Justice(11)`,
    imgUrl: `/RWS_Tarot_11_Justice.jpg`,
    description: `Balance, equality, fairness and correct judgement.Clarity, truth, and adjudication.`,
    astro: astro[6]
  },
  {
    name: `The Hanged Man(12)`,
    imgUrl: `/RWS_Tarot_12_Hanged_Man.jpg`,
    description: `ego deflation, viewing reality through a selfless lense,
      putting oneself in another's shoes, a pause for meditation, seeking a higher perspective. `,
    astro: astro[11]
  },
  {
    name: `Death (13)`,
    imgUrl: `/RWS_Tarot_13_Death.jpg`,
    description: `Death is transformation, the destruction or ceasing of something,
      someone, or a situation, an end to a cycle, ending the old to make room for the new.`,
    astro: astro[7]
  },
  {
    name: `Temperance (14)`,
    imgUrl: `/RWS_Tarot_14_Temperance.jpg`,
    description: `Balance,  careful mixing of two different  or opposing things, mediation,
    holding opposing ideas and embracing complexity. Tempering or refining concepts,
    elements, or ideas in order to make them stronger.`,
    astro: astro[8]
  },
  {
    name: `The Devil (15)`,
    imgUrl: `/RWS_Tarot_15_Devil.jpg`,
    description: ` Shadow self; evil behavior, wrong thinking, hidden aspects of the self;
      avoid the temptation to project this card's meaning to another instead of yourself.Toxicity,
      harmful behavior, focus on the physical realm instead of on the spiritual realm.`,
    astro: astro[9]
  },
  {
    name: `The Tower (16)`,
    imgUrl: `/RWS_Tarot_16_Tower.jpg`,
    description: `Something that is being destroyed in one's life; usually quite abruptly.
      Things that did not work together caused it to fall.Ruin, destruction of what wasn't meant to be.`
  },
  {
    name: `The Star (17)`,
    imgUrl: `/RWS_Tarot_17_Star.jpg`,
    description: `Healing, guidance, emotional breakthroughs, mending of wounds, inspiration, vulnerability and openness.`,
    astro: astro[10]
  },
  {
    name: `The Moon (18)`,
    imgUrl: `/RWS_Tarot_18_Moon.jpg`,
    description: `Subconscious concepts and ideas, the unconscious and subconscious. The dream world, instinctive and emotional realm. `,
    astro: astro[3]
  },
  {
    name: `The Sun (19)`,
    imgUrl: `/thesun.jpg`,
    description: `Childlike innocence, being young at heart, radiance, truth,
      purity of thought and intention, clarity and untainted perspective, optimism.`,
    astro: astro[4]
  },
  {
    name: `Judgment (20)`,
    imgUrl: `/RWS_Tarot_20_Judgement.jpg`,
    description: `Dramatic change, a reckoning of perspective and past actions-
       in situations, the self, or others. The writing on the wall, the verdict, the regeneration.`
  },
  {
    name: `The World (21)`,
    imgUrl: `/RWS_Tarot_21_World.jpg`,
    description: `The interface of the world. It reflects the world and its cycles.
      The cycles of life along with the traditions (or lack of traditions),
      patterns, and opportunities we have while on the earth.`
  },
  {
    name: `Ace of Cups`,
    imgUrl: `/Cups01.jpg`,
    description: `Spiritual love, love from and for god, birth of emotionally fulfilling time, connection, or revitalizing love.`
  },
  {
    name: `Two of Cups`,
    imgUrl: `/Cups02.jpg`,
    description: `loving others as yourself, a connection of two people, platonic or romantic,
       a moment of symmetry between two people. Love from God transmuted to another as one's self.`,
    astro: astro[3]
  },
  {
    name: `Three of Cups`,
    imgUrl: `/Cups03.jpg`,
    description: `Emotional friendship, celebration and harmony.`,
    astro: astro[3]
  },
  {
    name: `Four of Cups`,
    imgUrl: `/Cups04.jpg`,
    description: `emotional apathy, not getting pulled into emotional offerings or situations, emotionally blocked or aloof.`,
    astro: astro[3]
  },
  {
    name: `Five of Cups`,
    imgUrl: `/Cups05.jpg`,
    description: `Deep sorrow, crying over spilt milk, grief and tears over the past and its emotional losses.`,
    astro: astro[7]
  },
  {
    name: `Six of Cups`,
    imgUrl: `/Cups06.jpg`,
    description: `closure with the past, seeing the positive things from the past,
       regardless of whether they ended well, making peace with past situations.`,
    astro: astro[7]
  },
  {
    name: `Seven of Cups`,
    imgUrl: `/Cups07.jpg`,
    description: ` Dreams, illusions, options, temptations.Filled with ideas
      and possibilities that may or may not materialize.Confusion(sometimes).`,
    astro: astro[7]
  },
  {
    name: `Eight of Cups`,
    imgUrl: `/Cups08.jpg`,
    description: `Moving on emotionally.Leaving something that has been emotionally invested in to go in another direction. `,
    astro: astro[11]
  },
  {
    name: `Nine of Cups`,
    imgUrl: `/Cups09.jpg`,
    description: `Heart's desire, close to getting what you want that is emotionally fulfilling.`,
    astro: astro[11]
  },
  {
    name: `Ten of Cups`,
    imgUrl: `/Cups10.jpg`,
    description: `Success, happy ending, family, love, a happy emotional life`,
    astro: astro[11]
  },
  {
    name: `Page of Cups`,
    imgUrl: `/Cups11.jpg`,
    description: `Youthful inspiration, poetic, sweet, dreamy, intuitive parts of one's psyche.`
  },
  {
    name: `Knight of Cups`,
    imgUrl: `/Cups12.jpg`,
    description: `Romance, seduction, charisma, sweet words and actions; inspired emotional action and movement.`
  },
  {
    name: `Queen of Cups`,
    imgUrl: `/Cups13.jpg`,
    description: `Empathy, compassion and caring for others' feelings.`
  },
  {
    name: `King of Cups`,
    imgUrl: `/Cups14.jpg`,
    description: `Masculine empathy, navigating the waters of life,
  inspiring others through presence, visionary, artistic, typically committed to projects.`
  },
  {
    name: `Ace of Pentacles`,
    imgUrl: `/Pents01.jpg`,
    description: `New opportunity, materialization of something valuable that can be grown or invested.`
  },
  {
    name: `Two of Pentacles`,
    imgUrl: `/Pents02.jpg`,
    description: `Rolling with the punches, trying to keep a balance with your life.`,
    astro: astro[9]
  },
  {
    name: `Three of Pentacles`,
    imgUrl: `/Pents03.jpg`,
    description: `Collaboration with individuals of different but equally valuable skills,
      teamwork to create a new structure or thing in life.`,
    astro: astro[9]
  },
  {
    name: `Four of Pentacles`,
    imgUrl: `/Pents04.jpg`,
    description: `Protecting what you value, holding onto savings and protecting them, conservative, clinging tightly to valuables.`,
    astro: astro[9]
  },
  {
    name: `Five of Pentacles`,
    imgUrl: `/Pents05.jpg`,
    description: `Loss, poverty, not having what you need, a lack, the need to seek God in the heart to be relieved of troubles.`,
    astro: astro[1]
  },
  {
    name: `Six of Pentacles`,
    imgUrl: `/Pents06.jpg`,
    description: `Generosity, giving to others in need, whether for compassion or for power.`,
    astro: astro[1]
  },
  {
    name: `Seven of Pentacles`,
    imgUrl: `/Pents07.jpg`,
    description: `Slow growth, applied investments, waiting for the fruits of your labor to develop.`,
    astro: astro[1]
  },
  {
    name: `Eight of Pentacles`,
    imgUrl: `/Pents08.jpg`,
    description: `Work, meticulous development, working as a process instead of a task.`,
    astro: astro[5]
  },
  {
    name: `Nine of Pentacles`,
    imgUrl: `/Pents09.jpg`,
    description: `Pre - empress card; having material and familial support, steady growth and improvement,
      stability, training, dedication, and loyalty. No need to rush.Appreciation of the good life.`,
    astro: astro[5]
  },
  {
    name: `Ten of Pentacles`,
    imgUrl: `/Pents10.jpg`,
    description: `The spiritual template of family blending with its material image.
      The family, complete integration, inheritance and material success.`,
    astro: astro[5]
  },
  {
    name: `Page of Pentacles`,
    imgUrl: `/Pents11.jpg`,
    description: `Student of the earth; an exploring and nubile attitude,
  focus and fascination, curious of the material world and its possibilities.`
  },
  {
    name: `Knight of Pentacles`,
    imgUrl: `/Pents12.jpg`,
    description: `Slow  and steady ability, diligent and patient action, ability to invest in the future.`
  },
  {
    name: `Queen of Pentacles`,
    imgUrl: `/Pents13.jpg`,
    description: `mature feminine aspect that presides over many earthly matters;
  manages the home and areas of life correctly; caretaker, chef, home decorator.`
  },
  {
    name: `King of Pentacles`,
    imgUrl: `/Pents14.jpg`,
    description: `Slow Power, investing wisely, enjoying life after working patiently to create it.`
  },
  {
    name: `Ace of Swords`,
    imgUrl: `/Swords01.jpg`,
    description: `Brilliant thought or idea of the mind based on one's own conviction;
   Pinning down the thought or insight; may be used to defend or to hurt others.`
  },
  {
    name: `Two of Swords`,
    imgUrl: `/Swords02.jpg`,
    description: `Balance of the mind, inner searching, ritually laying out two options internally.`,
    astro: astro[6]
  },
  {
    name: `Three of Swords`,
    imgUrl: `/Swords03.jpg`,
    description: `Heartbreak, emotional betrayal and turmoil.Wounds of the mind that reveal holes in the heart from precise piercings.`,
    astro: astro[6]
  },
  {
    name: `Four of Swords`,
    imgUrl: `/Swords04.jpg`,
    description: `Mental healing, stability of the mind, rest and peaceful recuperation.`,
    astro: astro[6]
  },
  {
    name: `Five of Swords`,
    imgUrl: `/Swords05.jpg`,
    description: `Anger, loss, & cruelty.Consider your actions and words,
       inflated ego at the expense of others, being hurt by others or hurting others; victimization.`,
    astro: astro[10]
  },
  {
    name: `Six of Swords`,
    imgUrl: `/Swords06.jpg`,
    description: `Moving on with those you love the dearest. A quiet mental passage into new waters.`,
    astro: astro[10]
  },
  {
    name: `Seven of Swords`,
    imgUrl: `/Swords07.jpg`,
    description: `Subterfuge, illusion, getting away with something, sneaking, editing out what is not needed.`,
    astro: astro[10]
  },
  {
    name: `Eight of Swords`,
    imgUrl: `/Swords08.jpg`,
    description: `Trapped by self or others mentally, temporary bondage,
       blind to something, stuck in a mental trap that you can get out of.`,
    astro: astro[2]
  },
  {
    name: `Nine of Swords`,
    imgUrl: `/Swords09.jpg`,
    description: `mental torment, anxiety and restless thoughts.`,
    astro: astro[2]
  },
  {
    name: `Ten of Swords`,
    imgUrl: `/Swords10.jpg`,
    description: `The end of an old thought pattern, sometimes a betrayal,
      other times a completion of a way of thinking; can be very painful.It is not the end of everything.`,
    astro: astro[2]
  },
  {
    name: `Page of Swords`,
    imgUrl: `/Swords11.jpg`,
    description: `Investigator, curious thought and seeking the truth and answers,
      not yet reaching a final conclusion; seeking more information.`
  },
  {
    name: `Knight of Swords`,
    imgUrl: `/Swords12.jpg`,
    description: `Quick messages, daring and courageous, swift execution of words and information.`
  },
  {
    name: `Queen of Swords`,
    imgUrl: `/Swords13.jpg`,
    description: `Logical and clear speech and thoughts.
      Cutting away the nonsense or undesirable and calling forth the correct things to come forward.`
  },
  {
    name: `King of Swords`,
    imgUrl: `/Swords14.jpg`,
    description: `Logical and concise; mentally balanced and reasoning.
      Thoughts, words, and actions based on them.Pure thought - based reactions.`
  },
  {
    name: `Ace of Wands`,
    imgUrl: `/Wands01.jpg`,
    description: `Spark of passion and ardour, fresh desire of the heart.Spiritual calling, life force energy. `
  },
  {
    name: `Two of Wands`,
    imgUrl: `/Wands02.jpg`,
    description: `Plans & plotting; making decisions about how to proceed or what to choose; contemplation of the future.`,
    astro: astro[0]
  },
  {
    name: `Three of Wands`,
    imgUrl: `/Wands03.jpg`,
    description: `Creative evolution and collaboration; plans into action.`,
    astro: astro[0]
  },
  {
    name: `Four of Wands`,
    imgUrl: `/Wands04.jpg`,
    description: `Celebration, festivity, domestic bliss, stability of passion and strength.Firm foundation.`,
    astro: astro[0]
  },
  {
    name: `Five of Wands`,
    imgUrl: `/Wands05.jpg`,
    description: `ego battles, passionate debate, different ideas, people, or ideas in conflict; the need for unity.`,
    astro: astro[4]
  },
  {
    name: `Six of Wands`,
    imgUrl: `/Wands06.jpg`,
    description: `public victory, recognized achievement, leadership, being right, being noticed.`,
    astro: astro[4]
  },
  {
    name: `Seven of Wands`,
    imgUrl: `/Wands07.jpg`,
    description: `Resistance, defending one's ideas or work, fighting for your right or cause,
      first responder, initial immediate defense`,
    astro: astro[4]
  },
  {
    name: `Eight of Wands`,
    imgUrl: `/Wands08.jpg`,
    description: `a fully formed message or transmission of energy, a sent message or enactment.`,
    astro: astro[8]
  },
  {
    name: `Nine of Wands`,
    imgUrl: `/Wands09.jpg`,
    description: `anxious guarding, perseverance, not giving up, waiting for efforts to succeed.`,
    astro: astro[8]
  },
  {
    name: `Ten of Wands`,
    imgUrl: `/Wands10.jpg`,
    description: `culmination of effort, releasing a burden, or needing to.the time for rest as efforts are completed.`,
    astro: astro[8]
  },
  {
    name: `Page of Wands`,
    imgUrl: `/Wands11.jpg`,
    description: `spark of creativity and inspiration, laser focus on what makes one happy, passionate about new ideas or situations.`
  },
  {
    name: `Knight of Wands`,
    imgUrl: `/Wands12.jpg`,
    description: `passionate action and movement, smooth and refined energy.
      Lively and enthusiastic application of the heart and it's pursuits.`
  },
  {
    name: `Queen of Wands`,
    imgUrl: `/Wands13.jpg`,
    description: `caring and loyal helper; empowering others; devotion to a cause, mature persona in passion.`
  },
  {
    name: `King of Wands`,
    imgUrl: `/Wands14.jpg`,
    description: `enthuisiastic and persuasive leader; knows what they want, how they want it, and why they want it;
commands with passion and pure intentions.Has no hidden agenda.`
  }
];
