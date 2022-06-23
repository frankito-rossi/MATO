import { Component, OnInit } from '@angular/core';

const MUSICA = [
    {
      name: "Catarsis(2018)",
      urlyt: "https://youtu.be/bYh3OPVZoqk",
      urlsp: "",
      image: "https://i.ytimg.com/vi/bYh3OPVZoqk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBLMv2Tu6QNpVKcgHQFo8xpSqgVA",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "La historia Desconocida Videoclip (2019)",
      urlyt: "https://youtu.be/BPQEr_pLIEw",
      urlsp: "",
      image: "https://i.ytimg.com/vi/BPQEr_pLIEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVOsolEfINvlD1zQpGBOuVn5ydFg",
      tipo: "Disco",
      youtube: true,
      spotify: false
    },
    {
      name: "De A Ratos (2019)",
      urlyt: "https://www.youtube.com/watch?v=bxWpyPq96Ms&list=PLCtlAHhXbLbDtGSgTVbAsTmaHsVXl_eOC",
      urlsp: "",
      image: "https://i.ytimg.com/vi/bxWpyPq96Ms/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCLT7msPHIgHiEzNHzR_o2reeZjJg",
      tipo: "Disco",
      youtube: true,
      spotify: false
    },
    {
      name: "La Noche Videoclip (2019)",
      urlyt: "https://youtu.be/Lc056F13G9Q",
      urlsp: "",
      image: "https://i.ytimg.com/vi/Lc056F13G9Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ2NojZQWC_j-kTTZ5w0fA84KYOQ",
      tipo: "Videoclip",
      youtube: true,
      spotify: false
    },
    {
      name: "Un Buen día 2.0  (2019)",
      urlyt: "https://youtu.be/5-poeZgb3hQ",
      urlsp: "",
      image: "https://i.ytimg.com/vi/5-poeZgb3hQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbfSbJqKomAsUEh7oX-8PNImZhrw",
      tipo: "Disco",
      youtube: true,
      spotify: false
    },
    {
      name: "Saifer aka tamo Fresh (2019)",
      urlyt: "https://youtu.be/Sz8O4qgQi_E",
      urlsp: "",
      image: "https://i.ytimg.com/vi/Sz8O4qgQi_E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHwRnX7pZvxwNQxe6BNceYAdnTUA",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Colta (2020)",
      urlyt: "https://youtu.be/ttqLNR2p31g",
      urlsp: "",
      image: "https://i.ytimg.com/vi/ttqLNR2p31g/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlXv-bRnUjAWhK3t3bymXSy7LSPQ",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Saifer aka tamo Fresh (2020)",
      urlyt: "https://youtu.be/KaHpA_Rin0o",
      urlsp: "",
      image: "https://i.ytimg.com/vi/KaHpA_Rin0o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvpO8243ytM37Rs3d6pzWmQ6ZTgg",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Chola (2020)",
      urlyt: "https://youtu.be/tcMCHEpCEx0",
      urlsp: "",
      image: "https://i.ytimg.com/vi/tcMCHEpCEx0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYfSaAI5nERba4pGrzXjsGrV8EzA",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Lost Tape (2020)",
      urlyt: "https://youtu.be/l6uEY43vy3o",
      urlsp: "",
      image: "https://i.ytimg.com/vi/l6uEY43vy3o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVNX-GpsK0qmAhigzeRwYpjYaMNw",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Disfraces (2021)",
      urlyt: "https://youtu.be/YQ4n0ZCJQ6k",
      urlsp: "https://open.spotify.com/track/2PSQ9K8OK7GxWqc5JQN8n8?si=PD09wM5DRtK2gULST-XiQQ&utm_source=copy-link",
      image: "https://i.scdn.co/image/ab67616d00001e029e1f95d7968277b2199847d2",
      tipo: "Single",
      youtube: true,
      spotify: true
    },
    {
      name: "HC (2021)",
      urlyt: "https://youtu.be/klNgO208pDo",
      urlsp: "",
      image: "https://i.ytimg.com/vi/klNgO208pDo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjtSL__qErbjRqdiip4lOZ9QoZYA",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "B.A.M.T (2021)",
      urlyt: "https://youtu.be/iOuXhcVV8pk",
      urlsp: "https://open.spotify.com/track/1QnEax134u4xvNfs96DzEk?si=M_uYGK_cRlGboGkPMY82Wg&utm_source=copy-link",
      image: "https://i.scdn.co/image/ab67616d00001e0278dc1166f9b7b96e6e8865b9",
      tipo: "Single",
      youtube: true,
      spotify: true
    },
    {
      name: "Flama sessions Vol.1 (2022)",
      urlyt: "https://youtu.be/0SKq9sG-cLQ",
      urlsp: "",
      image: "https://i.ytimg.com/vi/0SKq9sG-cLQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLR6chIL-T24pem8f_hniFxOtCWA",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Motherfunk Ft Richard,Flaming tundra,Danilo,Agu (2022)",
      urlyt: "https://youtu.be/Tc_qf8A-heA",
      urlsp: "",
      image: "https://i.ytimg.com/vi/Tc_qf8A-heA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw3fj9kiqlR9AJfPPSDPY-aCBGeA",
      tipo: "Single",
      youtube: true,
      spotify: false
    },
    {
      name: "Yipi",
      urlyt: "",
      urlsp: "https://open.spotify.com/track/3004hKnO3Qf5HndXkNYTMh?si=DMxSQKKmT6qQhCtPen1S9w&utm_source=copy-link",
      image: "https://i.scdn.co/image/ab67616d00001e022bbf79c6ab65bd281a936ec6",
      tipo: "Single",
      youtube: false,
      spotify: true
    },
    {
      name: "Beat 5",
      urlyt: "",
      urlsp: "https://open.spotify.com/track/6FMonoE2ew23zrxERebm6N?si=QdShHlhQSo6-XKIeFLkIfQ&utm_source=copy-link",
      image: "https://i.scdn.co/image/ab67616d00001e022bbf79c6ab65bd281a936ec6",
      tipo: "Single",
      youtube: false,
      spotify: true
    },
  ];

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {

  musica = MUSICA

  constructor() { }

  ngOnInit(): void {
  }

  evaluate(condition: boolean){
    return condition;
  }

}
