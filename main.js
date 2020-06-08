// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)] ;
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

//factory function
let pAequorFactory = (specimenNum, dna) =>{
  return {
    specimenNum: specimenNum,
    dna: dna,

    //mutate method:
    mutate(dna){
      console.log('mutate method:');
      //console.log(this.dna);
      const dnaIndex = Math.floor(Math.random() * this.dna.length);

      console.log('The mutation is located on the index: '+ (dnaIndex+1));

      let DNA = this.dna[dnaIndex];
      //console.log(DNA);
      let RRB = returnRandBase();
      //console.log(RRB);
      while (DNA === RRB){
        RRB = returnRandBase();
      }
      //console.log(RRB);
      this.dna[dnaIndex] = RRB;
      console.log(this.dna);
    },

    //compareDNA method:
    compareDNA(dna2){
      console.log('compareDNA method:');
      //pAequor's dna
      let DNA = this.dna;
      //console.log(DNA);

      //pAequor2's dna
      let DNA2 = dna2.dna;
      //console.log(DNA2);

      let sameDNA = 0;
      for (let i=0; i< DNA.length; i++){
        if (DNA[i] === DNA2[i]){
          sameDNA++;
        }
      };
      //console.log(sameDNA);
      const perSameDNA = Math.round((sameDNA/this.dna.length)*100);
      //console.log(perSameDNA);
      console.log('specimen #1 and specimen #2 have '+ perSameDNA+'% DNA in common');
    },

    //willLikelySurvive method:
    willLikelySurvive(){
      //console.log('willLikelySurvive method:');
      //pAequor's dna
      let DNA = this.dna;
      //console.log(DNA);

      let nbCG = 0;

      for(let i=0; i< DNA.length; i++){
        if (DNA[i] === 'C' || DNA[i] === 'G'){
          nbCG++;
        }
      }
      //console.log(nbCG);
      let perCG = Math.round((nbCG/DNA.length)*100);
      //console.log("The Pila aequor'DNA contain : " + perCG +"% of 'C' 'G'. Does he have a better chance to survive?");

      if (perCG >= 60){
        return true;
      }else{
        return false
      };
    }
  }
};

//pAequor = pAequorFactory(1, mockUpStrand());
//pAequor2 = pAequorFactory(2, mockUpStrand());
//console.log(pAequor);
//console.log(pAequor.mutate());
//console.log(pAequor.compareDNA(pAequor2));
//console.log(pAequor.willLikelySurvive());

let pAequor30 = [];
while(pAequor30.length < 30){
  let i=0;
  let pAequorI = pAequorFactory(i++, mockUpStrand());
  if(pAequorI.willLikelySurvive() === true){
    //console.log(pAequorI.dna);
    //console.log(pAequorI.willLikelySurvive());
    //console.log(pAequor30.length);
    pAequor30.push(pAequorI.dna);
  };
};
console.log(pAequor30);
//console.log(pAequor30.length);
