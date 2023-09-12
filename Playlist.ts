// Exercício Final do Módulo III do Santander Coders
// Biblioteca de Música Simples

class Musica {
    titulo: string;
    artista: string;
    duracao: number;

    constructor(titulo: string, artista: string, duracao: number) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }

}

class BibliotecaMusical {
    private musicas: Musica [] = [];

    adicionarMusica(musica: Musica): void {
        this.musicas.push(musica);
    }
    
    listarMusicas(): void {
        console.log("Playlist");
        for (let i = 0; i < this.musicas.length; i++) {
            const musica = this.musicas[i];
            console.log(`${i + 1}. ${musica.titulo} - ${musica.artista} (${musica.duracao} minutos)`);
          }
        }

        reproduzirMusica(titulo: string): void {
           
            for (let i = 0; i < this.musicas.length; i++) {
                const musica = this.musicas[i];
                if (musica.titulo === titulo) {
                  console.log(`Reproduzindo: ${musica.titulo} - ${musica.artista}`);
              } 
    
    }
}

    calcularDuracaoTotal(): void {
        let duracaoTotal= 0;
        for (let i = 0; i < this.musicas.length; i++) {
          const musica = this.musicas[i];
          duracaoTotal += musica.duracao;
        }
        console.log(`Duração total da biblioteca: ${duracaoTotal} minutos`);
      }
    }

    class Usuario {
        private bibliotecaMusical: BibliotecaMusical = new BibliotecaMusical();
        public nome: string;
      
        constructor(nome: string) {
          this.nome = nome;
        }
      
        adicionarMusicaNaBiblioteca(musica: Musica): void {
          this.bibliotecaMusical.adicionarMusica(musica);
        }
      
        listarMusicasNaBiblioteca(): void {
          console.log(`Biblioteca de ${this.nome}:`);
          this.bibliotecaMusical.listarMusicas();
        }
      
        reproduzirMusicaNaBiblioteca(titulo: string): void {
          this.bibliotecaMusical.reproduzirMusica(titulo);
        }

        
    }

      
      // Testando
      
      const musica1 = new Musica("Yellow Submarine", "The Beatles", 2.05);
      const musica2 = new Musica("O Leãozinho", "Caetano Veloso", 3.05);
      const musica3 = new Musica("Bole rebole", "Los Bregas", 3)
      const usuario1 = new Usuario("Bentinho");
      const usuario2 = new Usuario("Zequinha"); 
      
      usuario1.adicionarMusicaNaBiblioteca(musica1);
      usuario1.adicionarMusicaNaBiblioteca(musica2);
      usuario2.adicionarMusicaNaBiblioteca(musica2);
      usuario2.adicionarMusicaNaBiblioteca(musica3);
      
      usuario1.listarMusicasNaBiblioteca();
      usuario2.listarMusicasNaBiblioteca();
      usuario1.reproduzirMusicaNaBiblioteca("O Leãozinho");
      
      
      const biblioteca = new BibliotecaMusical();
      biblioteca.adicionarMusica(musica1);
      biblioteca.adicionarMusica(musica2);
      biblioteca.adicionarMusica(musica3);
      
      biblioteca.calcularDuracaoTotal();
      

    
    