import Button from "./Button";
import styles from "../style";

const CTA = () =>  (
  <section className={`${styles.flexCenter} ${styles.padding} my-16 bg-black-gradient-2 sm:flex-row flex-col rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h1 className={styles.heading2}>Let's try our service now!</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business
      anywhere on the planet.</p>
    </div>

    <div>
      <Button styles={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`} />
    </div>
    </section>
  )


export default CTA