enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Premium;
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = "VK",
    FACEBOOK = "FACEBOOK",
    TWITTER = "TWITTER"
}

const social = SocialMedia.TWITTER; 
console.log(social);
