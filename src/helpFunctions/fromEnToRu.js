export default function fromEnToRu(localStuff){
    switch(localStuff){
        case "Main":
            return "Ветровики"
        case "Visors":
            return "Ветровики"
        case "Chrome":
            return "Ветр. хром"
        case "Hood":
            return "Мухобойки"
        case "Back":
            return "Спойлера заднего стекла"
        default:
            return localStuff
    }
}