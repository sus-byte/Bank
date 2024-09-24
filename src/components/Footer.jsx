import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
import styles from "../style";

const Footer = () => (
	<section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex flex-[1] flex-col justify-start mr-10 ">
				<img
					src={logo}
					alt="hoobank"
					className="w-[266px] h-[72.14px] object-contain"
				/>
				<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
					A new way to make the payments easy, reliable and secure.
				</p>
			</div>

			<div className="flex-[1.5] flex flex-row justify-between flex-wrap w-full">
				{footerLinks.map((item) => (
					<div
						key={item.title}
						className="flex flex-col md:my-0 my-8  min-w-[150px]"
					>
						<h4 className="text-white font-poppins text-[18px] font-medium leading-[27px]">
							{item.title}
						</h4>

						<ul className="mt-4 list-none">
							{item.links.map((link, index) => (
								<li
									key={link.name}
									className={`text-dimWhite font-poppins hover:text-secondary text-[16px] font-normal leading-[24px] cursor-pointer ${
										index !== item.links.length - 1 ? "mb-4" : "mb-0"
									}`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>

		<div className="w-full flex justify-between items-center md:flex-row flex-col border-t py-6 border-t-[#3F3E45]">
			<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
				Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>
      
      <div className="flex flex-row md:mt-0 mt-6">
        {
          socialMedia.map((item, index) => (
            <img key={item.id} src={item.icon} alt={item.id} className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
          ))
        }
      </div>
		</div>
	</section>
);

export default Footer;
