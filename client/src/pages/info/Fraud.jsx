import React from 'react';
import { FaFacebook, FaMousePointer, FaTasks, FaUsers } from 'react-icons/fa';
import { BreadCrumb } from '../../components';

const Fraud = () => {
  return (
    <main className='pt-20 sm:pt-28'>
      <BreadCrumb
        title='fraud policy'
        subtitle='This policy is in place to protect our community.'
        page='Fraud Policy'
      />

      <div className='bg-white m-0 pt-4 pb-0 mb-5'>
        <div className='px-4 mx-auto max-w-screen-xl'>
          <p>
            Our Fraud Policy was created to protect us from users producing fake
            stats and cashing out. Below you can find out the specific rules on
            traffic and tasks. If these rules are violated, the proper actions
            will be carried out.
          </p>
          <p>
            Our fraud policy is direct and concise. All unauthentic traffic is
            prohibited. If our manual review team or our AI automatically
            detects any fake stats, your account will be terminated indefinitely
            and you will be permanently banned from CloutZap and accessing its
            services.
          </p>
          <div className='font-bold mt-8'>
            <h3>Prohibited Actions</h3>
            <span>Examples of Generating Unauthentic Stats!</span>
          </div>
          <h3 className='flex font-bold items-center gap-x-2 mb-2'>
            <FaMousePointer />
            Clicks
          </h3>
          <div className='center'>
            <li>Repeatedly clicking your own link</li>
            <li>Using different devices to click your own link</li>
            <li>Using a VPN to click your own link</li>
            <li>Buying fake traffic from fake traffic sites</li>
            <li>Using any software to generate fake clicks on your link</li>
          </div>

          <h3 className='flex font-bold items-center gap-x-2 mt-5 mb-2'>
            <FaUsers />
            Referrals
          </h3>
          <div className='center'>
            <li>Signing up under your own referral link repeatedly</li>
            <li>
              Using another device to sign up under your own referral link
            </li>
            <li>Using a VPN to sign up under your own referral link</li>
            <li>
              Using any automation software to automate the referral process
            </li>
            <li>Buying fake referrals from fake traffic sites</li>
          </div>

          <h3 className='flex font-bold items-center gap-x-2 mt-5 mb-2'>
            <FaFacebook />
            Social Submission
          </h3>
          <div className='center'>
            <li>
              Renaming an old video with the video title provided on the YouTube
              Submission page.
            </li>
            <li>
              Deleting your post/video after submitting it in Social Posts
              section.
            </li>
            <li>
              Creating multiple fake short videos that clearly do not have
              anything to do with CloutZap at all.
            </li>
            <li>
              Submitting fake post, i.e. Instagram, Facebook or TikTok post that
              clearly do not have anything to do with CloutZap at all.
            </li>
            <li>Submitting Random videos of some other users.</li>
          </div>

          <h3 className='flex font-bold items-center gap-x-2 mt-5 mb-2'>
            <FaTasks />
            Tasks
          </h3>
          <div className='center'>
            <li>Using a VPN to attempt to complete a task multiple times.</li>
            <li>Not completing all steps in the task's requirements.</li>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Fraud;
