export enum PlayerLevel {
    JUNIOR,
    MIDDLE,
    SENIOR,
    PRINCIPLE,
    DISTINGUISHED
}

export function playerLevelToString(level: PlayerLevel) {
    switch (level) {

        case PlayerLevel.JUNIOR:
            return "Junior";
        case PlayerLevel.MIDDLE:
            return "Middle";
        case PlayerLevel.SENIOR:
            return "Senior";
        case PlayerLevel.PRINCIPLE:
            return "Principle";
        case PlayerLevel.DISTINGUISHED:
            return "Distinguished"
    }
}

export function playerLevelFromString(level: string|number) {
    switch (level) {

        case 0:
        case "Junior":
            return PlayerLevel.JUNIOR;
        case 1:
        case "Middle":
            return PlayerLevel.MIDDLE;
        case 2:
        case "Senior":
            return PlayerLevel.SENIOR;

        case 3:
        case "Principle":
            return PlayerLevel.PRINCIPLE;
        case 4:
        case "Distinguished":
            return PlayerLevel.DISTINGUISHED;

    }
    throw new Error("Unknown Playerlevel " + level);
}