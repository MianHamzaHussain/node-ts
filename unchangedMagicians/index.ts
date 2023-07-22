function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map((magician) => `${magician} the Great`);
    return greatMagicians;
  }
  
  const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  const greatMagicians: string[] = make_great([...magicians]);
  
  console.log("Original magicians:");
  show_magicians(magicians);
  
  console.log("Great magicians:");
  show_magicians(greatMagicians);
  