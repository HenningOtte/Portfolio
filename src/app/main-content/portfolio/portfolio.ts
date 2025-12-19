import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects: { name: string; techstack: string[]; description: string; img: string }[] = [
    {
      name: 'Join',
      techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'join_laptop_mockup.png',
    },
    {
      name: '1-Bit Horror Game',
      techstack: ['JavaScript', 'CSS', 'HTML'],
      description:
        'A jump, run, and throw game built using object-oriented principles. Collect coins and rare fireballs scattered across the map to defeat skeletons and a dangerous cyclops—who can only be defeated using these scarce fireballs.',
      img: '1bit_horror_game_laptop_mockup.png',
    },
    {
      name: 'Pokedex',
      techstack: ['JavaScript', 'CSS', 'HTML'],
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      img: 'pokemon_api_laptop_mockup.png',
    },
    {
      name: 'Ring of Fire',
      techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      description:
        'An Angular-based multiplayer game using Firebase for real-time data synchronization and player state management.',
      img: 'ring-of-fire_laptop_mockup.png',
    },
  ];

  flexDirection(i: boolean) {
    return i == true ? 'row-reverse' : 'row';
  }
}
