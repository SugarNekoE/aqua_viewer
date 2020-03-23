import {OngekiMusic} from './OngekiMusic';
import {OngekiCard} from './OngekiCard';
import {OngekiCharacter} from './OngekiCharacter';

export interface PlayerPlaylog {
  sortNumber: number;
  placeId: number;
  placeName: string;
  playDate: string;
  userPlayDate: string;
  musicId: number;
  songInfo: OngekiMusic;
  level: number;
  playKind: number;
  eventId: number;
  eventName: string;
  eventPoint: number;
  playedUserId1: number;
  playedUserId2: number;
  playedUserId3: number;
  playedUserName1: string;
  playedUserName2: string;
  playedUserName3: string;
  playedMusicLevel1: number;
  playedMusicLevel2: number;
  playedMusicLevel3: number;
  cardId1: number;
  cardId2: number;
  cardId3: number;
  cardLevel1: number;
  cardLevel2: number;
  cardLevel3: number;
  cardAttack1: number;
  cardAttack2: number;
  cardAttack3: number;
  cardInfo1?: OngekiCard;
  cardInfo2?: OngekiCard;
  cardInfo3?: OngekiCard;
  bossCharaId: number;
  bossLevel: number;
  bossAttribute: number;
  bossCharaInfo?: OngekiCharacter;
  clearStatus: number;
  techScore: number;
  techScoreRank: number;
  battleScore: number;
  battleScoreRank: number;
  maxCombo: number;
  judgeMiss: number;
  judgeHit: number;
  judgeBreak: number;
  judgeCriticalBreak: number;
  rateTap: number;
  rateHold: number;
  rateFlick: number;
  rateSideTap: number;
  rateSideHold: number;
  bellCount: number;
  totalBellCount: number;
  damageCount: number;
  overDamage: number;
  playerRating: number;
  battlePoint: number;
  isFullCombo: boolean;
  isOverDamageNewRecord: boolean;
  isFullBell: boolean;
  isTechNewRecord: boolean;
  isAllBreak: boolean;
  isBattleNewRecord: boolean;
}
