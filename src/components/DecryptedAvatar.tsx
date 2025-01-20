import DecryptedText from "@/components/decryptedText";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function DecryptedAvatar() {
  return (
    <div>
      <Avatar>
        <AvatarImage />
        <AvatarFallback className="border border-zinc-700 ">
          <DecryptedText
            text="YC"
            animateOn="view"
            maxIterations={40}
            characters="YATINDERCHHOKER123/*-+"
          />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default DecryptedAvatar;
