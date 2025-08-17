// const Button = ({buttonText, variant, onClickHandler}:{buttonText: string, variant: string, onClickHandler: ()=> void;}) =>{

//     return (
//         <button>

//         </button>
//     );
// };

"use client";
interface ButtonProps {
    buttonText: string,
    variant: string, 
    onClickHandler: () => void
}
const Button = ({ buttonText, variant, onClickHandler }: ButtonProps) => {
    const variantSwitch = (variant: string) => {
        switch (variant) {
            case "primary":
                return "bg-green-500 text-white"
            case "secondary":
                return "bg-white text-green-500 border-1 border-green-500"
            default:
                return "bg-green-500 text-white"
        }
    };
    const variantClass = variantSwitch(variant);
    return (
        <button className={`${variantClass} px-[16px] py-[12py] border-none rounded-sm cursor-pointer`}
            onClick={onClickHandler}>
            {buttonText}
        </button>
    );
};
export default Button;
