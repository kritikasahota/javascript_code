let grade = 180 ;
switch(true ){
    case (grade>=80 && grade<=100):
        console.log("A");
        break;

        case (grade>=70 && grade<=79):
            console.log("B");
            break;

            case (grade>=60 && grade<=69):
                console.log("C");
                break;

                case (grade>=50 && grade<=59):
                    console.log("D");
                    break;

                    case (grade>=0 && grade<=49):
                        console.log("F");
                        break;

                        default:
                            console.log("error");

}