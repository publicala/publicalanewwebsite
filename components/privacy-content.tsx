interface PrivacyContentProps {
  dict?: any
  locale?: string
}

export function PrivacyContent({ dict, locale = "en" }: PrivacyContentProps) {
  // TODO: Legal documents require professional translation
  // Currently only available in English
  // Spanish and Portuguese translations should be added when available
  
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">PRIVACY POLICY</h1>
      <h2 className="text-2xl font-bold mb-6">QUERYLOOP INC.</h2>

      <h3 className="text-xl font-semibold mb-4">Acknowledgements</h3>
      <p className="mb-6">
        QUEERYLOOP, INC., a C Corporation of Delaware, United States, established in 651 N. Broad St. Suite 206,
        Middletown DE 19709, United States (hereinafter, indistinctly "publica.la") Informs users of the website about
        its policy regarding the treatment and protection of personal data that may be collected by browsing or
        contracting services through its use. publica.la declares that its site is secure, in order to provide customers
        with a high-level service, with the appropriate internal controls that guarantee the correct use of the
        information. To achieve the above, the necessary measures are taken to guarantee the security, integrity and
        confidentiality of the data.
      </p>

      <p className="mb-6">
        Personal data will be collected through the publica.la website, https://publicala.wpenginepowered.com, when the
        user enters information in any of the fields intended for this purpose. These fields are duly marked and no data
        will be stored until the user does not expressly accept the assignment and management in accordance with this
        privacy policy.
      </p>

      <p className="mb-6">
        In the event that the user does not accept the management of their data according to this Privacy Policy, it
        will not be collected, which may mean that the service provided by publica.la cannot be carried out.
      </p>

      <p className="mb-6">
        Only the data strictly necessary to carry out the normal activity of the service will be collected, complying
        with the principle of data minimization. The data collected will in any case be from users older than 16 years.
        publica.la reserves the right to take appropriate measures to verify the veracity of age.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-4">Purpose of the treatment</h3>
      <p className="mb-4">
        In compliance with the current regulations on the protection of personal data, publica.la informs that the
        collection and automated processing of personal data is intended to:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          To maintain the contractual relationship, as well as the management, administration, provision and improvement
          of the service;
        </li>
        <li>Sending requested information through the forms provided on the page;</li>
        <li>
          Sending newsletters, as well as commercial communications of promotions and/or advertising of the Site or
          Platform of publica.la;
        </li>
        <li>Manage the website, business and virtual libraries mounted on the publica.la platform;</li>
        <li>Customize the website for the user;</li>
        <li>Enable the use of services available on the website; and</li>
        <li>Provide services purchased through the website;</li>
      </ul>

      <h3 className="text-xl font-semibold mt-10 mb-4">Types of data</h3>
      <p className="mb-6">
        The acceptance of this Privacy Policy will be understood for all purposes as the provision of explicit and
        unequivocal consent of the user to the processing of personal data in the terms set forth, as well as to the
        international transfer of data that occurs, exclusively due to the physical location of the facilities of the
        service providers and data processors.
      </p>

      <p className="mb-4">
        Depending on the interaction of the user on the website, publica.la can collect and process all or part of the
        following information.
      </p>

      <p className="font-semibold mt-6 mb-2">When the user visits the website:</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Activity on the website: this is collected through the use of cookies in the user's web browser</li>
        <li>IP address</li>
      </ul>

      <p className="font-semibold mt-6 mb-2">
        When the user configures their virtual library using our website or platform:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Industry</li>
      </ul>

      <p className="font-semibold mt-6 mb-2">
        When the user acquires a publication, electronic book or digital content using our website or platform:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Name</li>
        <li>Billing address</li>
        <li>Email address</li>
        <li>Purchase History</li>
      </ul>

      <h3 className="text-xl font-semibold mt-10 mb-4">Timeframe</h3>
      <p className="mb-6">
        The data will be kept until the objective for which they were collected is fulfilled or until the right to the
        deletion or modification of them is exercised. As long as this does not conflict with the need to store them for
        legal reasons.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-4">User Rights</h3>
      <p className="mb-6">
        The user may at any time exercise the rights of access, opposition, rectification, erasure and portability (if
        applicable). The exercise of these rights can be done by the user through email to support@publica.la or at the
        address 651 N. BROAD ST. SUITE 206 MIDDLETOWN, DE 19709, United States, indicating the rights to be exercised
        and proof of identity. We commit to respond to your request within a maximum period of 30 business days.
      </p>

      <p className="mb-6">
        The exercise of these rights is personal and can only be requested by the owner. The user declares that all the
        information provided by him is true and correct, and undertakes to keep them updated, communicating the changes
        through his personal account on the website or platform.
      </p>

      <p className="mb-6">
        Likewise, we remind the user that he can oppose the sending of commercial communications by any means and at any
        time, by sending an email to the address indicated above. publica.la will not send advertising or promotional
        communications by email or other equivalent electronic means of communication that had not previously been
        requested or expressly authorized by the recipients thereof.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-4">Third parties</h3>
      <p className="mb-6">
        Sometimes publica.la requires sharing personal data with trusted third parties. In such cases, the data will
        only be used for the purpose specified in section III and will be transferred and stored securely, and will be
        deleted or made anonymous if publica.la stops working with that third party.
      </p>

      <p className="mb-6">
        As processors, we have hired the following service providers, having committed to compliance with the regulatory
        provisions, applicable to data protection, at the time of hiring: Amazon Web Services, Google Analytics, Google
        Compute Cloud, Mailgun, MercadoPago, Mixpanel, Netlify, Rollbar, Stripe and Acord Corporation.
      </p>

      <p className="mb-6">This list may change from time to time according to our business processes.</p>

      <h3 className="text-xl font-semibold mt-10 mb-4">European Union & Swiss Users (Privacy Shield Framework)</h3>
      <h4 className="text-lg font-semibold mb-3">EU-US, Swiss-US Privacy Shield Framework</h4>

      <p className="mb-6">
        QueryLoop, Inc complies with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework
        (the "Privacy Shield"), as set forth by the U.S. Department of Commerce regarding the collection, use,
        processing, and retention of "personal data" (as defined under the Privacy Shield), within the scope of this
        Policy, transferred from applicable European countries to the United States. QueryLoop, Inc has certified to the
        Department of Commerce that it adheres to the Privacy Shield Principles for such personal data. If there is any
        conflict between the terms in this privacy policy and the Privacy Shield Principles, the Privacy Shield
        Principles shall govern. To learn more about the Privacy Shield program and to view our certification, please
        visit{" "}
        <a href="https://www.privacyshield.gov" className="text-primary hover:underline">
          https://www.privacyshield.gov
        </a>
        .
      </p>

      <p className="mb-6">
        As required under the principles, when QueryLoop, Inc receives Personal Data under the Privacy Shield and then
        transfers it to a third-party service provider acting as an agent on QueryLoop, Inc's behalf, we have certain
        liability under the Privacy Shield if both (i) the agent processes the information in a manner inconsistent with
        the Privacy Shield and (ii) QueryLoop, Inc is responsible for the event giving rise to the damage.
      </p>

      <p className="mb-6">
        QueryLoop, Inc remains liable for the protection of Personal Data that we transfer to these third parties within
        the scope of our Privacy Shield certification, except to the extent that we are not responsible for the event
        giving rise to any unauthorized or improper processing.
      </p>

      <p className="mb-6">
        Some users (including those whose information we collect under the Privacy Shield) have certain legal rights to
        access certain information we hold about them and to request its deletion: For Personal Data about European
        residents, when the purposes of processing are satisfied, and we are not required to retain Personal Data to
        comply with applicable law, we will delete or anonymize your Personal Data within a maximum of twelve months.
      </p>

      <p className="mb-6">
        Given that the Internet is a global environment, using the Internet to collect and process Information
        necessarily involves the transmission of data on an international basis. Therefore, by using any of the
        Product(s), you acknowledge the transfer, storage or use of your Information outside your country of residence
        to any country (including the United States, Canada, the United Kingdom and Australia) where we have facilities
        or engage trusted third parties (such as payment processors, cloud service or other IT providers and other
        companies that provide services to us). You understand that the countries to which we may transfer Information
        may not have as comprehensive a level of data protection as in your country. In relation to Australia's Privacy
        Act, you agree that in the case of a breach by the third party in relation to handling your personal data, we
        will not be accountable for the third party under the Privacy Act and you may not be able to seek redress under
        the Privacy Act.
      </p>

      <h4 className="text-lg font-semibold mt-8 mb-3">Legal Basis for Use (e.g., processing) of Your Information:</h4>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          Regulation 2016/679 of the European Union concerning the protection of natural persons with regard to the
          processing of personal data and the free movement of this data.
        </li>
        <li>
          Where use of your Information is necessary to perform our obligations under a contract with you (for example,
          to comply with the terms of service of our Products which you accept by browsing the Products or registering;
          and/or our contract to provide our Products to you);
        </li>
        <li>
          Where use of your Information is necessary for our legitimate interests or the legitimate interests of others
          (for example, to provide security for our Products; operate our Products; make and receive payments; comply
          with legal requirements and defend our legal rights; prevent fraud); or
        </li>
        <li>With your consent; or</li>
        <li>Other grounds, as required or permitted by law in the specific respective context.</li>
      </ul>

      <p className="mb-6">
        If you have any questions or complaints about QueryLoop, Inc's privacy practices, including questions related to
        the Privacy Shield, you may contact us at the email address or mailing address set forth under "Contact Us." We
        will work with you to resolve your issue.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-4">Complaints and Dispute Resolution</h3>
      <p className="mb-6">
        In compliance with the Privacy Shield Principles, QueryLoop, Inc commits to resolve complaints about our
        collection or use of your Personal Data. European and Swiss residents with inquiries or complaints regarding our
        Privacy Shield policy should first contact QueryLoop, Inc at:
      </p>

      <div className="mb-6 pl-4 border-l-4 border-gray-200 py-2">
        <p>QueryLoop, Inc</p>
        <p>ATTN: Info Data Sec and Privacy Officer</p>
        <p>651 N. Broad St. Suite 206</p>
        <p>Middletown DE 19709, United States</p>
        <p>privacy@publica.la</p>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Modifications</h3>
      <p className="mb-6">
        Any modification of the Privacy Policy will be published at least ten days before its effective application
      </p>
    </div>
  )
}
