"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import {
  Box,
  Heading,
  Text,
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";

const page = () => {
  // useEffect(() => {
  //   window.location.href = "/auth/xckvnalo"
  // }, [])

  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py={{ base: 6, md: 10 }}>
        <Box>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            mb={{ base: 3, md: 5 }}
            textAlign={{ base: "center", md: "center" }}
          >
            Terms and Conditions
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            textColor={"gray"}
            fontSize={{ base: "md", md: "md" }}
            textAlign="justify"
          >
            These Terms and Conditions, along with privacy policy or other terms
            (“Terms”) constitute a binding agreement by and between ADITYA
            DIGITAL MONEY PRIVATE LIMITED, ( “Website Owner” or “we” or “us” or
            “our”) and you (“you” or “your”) and relate to your use of our
            website, goods (as applicable) or services (as applicable)
            (collectively, “Services”). By using our website and availing the
            Services, you agree that you have read and accepted these Terms
            (including the Privacy Policy). We reserve the right to modify these
            Terms at any time and without assigning any reason. It is your
            responsibility to periodically review these Terms to stay informed
            of updates. The use of this website or availing of our Services is
            subject to the following terms of use:
          </Text>

          <List
            as="ul"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          ></List>
            <ul>
              <li>
                To access and use the Services, you agree to provide true,
                accurate and complete information to us during and after
                registration, and you shall be responsible for all acts done
                through the use of your registered account.
              </li>
              <li>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                offered on this website or through the Services, for any
                specific purpose. You acknowledge that such information and
                materials may contain inaccuracies or errors and we expressly
                exclude liability for any such inaccuracies or errors to the
                fullest extent permitted by law.
              </li>
              <li>
                Your use of our Services and the websiteis solely at your own
                risk and discretion.. You are required to independently assess
                and ensure that the Services meet your requirements.
              </li>
              <li>
                The contents of the Website and the Services are proprietary to
                Us and you will not have any authority to claim any intellectual
                property rights, title, or interest in its contents.
              </li>
              <li>
                You acknowledge that unauthorized use of the Website or the
                Services may lead to action against you as per these Terms or
                applicable laws.
              </li>
              <li>
                You agree to pay us the charges associated with availing the
                Services.
              </li>
              <li>
                You agree not to use the website and/ or Services for any
                purpose that is unlawful, illegal or forbidden by these Terms,
                or Indian or local laws that might apply to you.
              </li>
              <li>
                You agree and acknowledge that website and the Services may
                contain links to other third party websites. On accessing these
                links, you will be governed by the terms of use, privacy policy
                and such other policies of such third party websites.
              </li>
              <li>
                You understand that upon initiating a transaction for availing
                the Services you are entering into a legally binding and
                enforceable contract with the us for the Services.
              </li>
              <li>
                You shall be entitled to claim a refund of the payment made by
                you in case we are not able to provide the Service. The
                timelines for such return and refund will be according to the
                specific Service you have availed or within the time period
                provided in our policies (as applicable). In case you do not
                raise a refund claim within the stipulated time, than this would
                make you ineligible for a refund.
              </li>
              <li>
                Notwithstanding anything contained in these Terms, the parties
                shall not be liable for any failure to perform an obligation
                under these Terms if performance is prevented or delayed by a
                force majeure event
              </li>
              <li>
                These Terms and any dispute or claim relating to it, or its
                enforceability, shall be governed by and construed in accordance
                with the laws of India.
              </li>
              <li>
                All disputes arising out of or in connection with these Terms
                shall be subject to the exclusive jurisdiction of the courts in
                Ghaziabad, Uttar Pradesh.
              </li>
              <li>
                All concerns or communications relating to these Terms must be
                communicated to us using the contact information provided on
                this website.
              </li>
            </ul>
          {/* <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            DEFINITIONS AND INTERPRETATION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            2.1. In this Terms of Use, unless the contrary intention appears
            and/or the context otherwise requires, capitalized terms defined by:
            (i) inclusion in quotations and/ or parenthesis have the meanings so
            ascribed; and (ii) the following terms shall have the meanings
            assigned to them herein below: “Applicable Law” includes all
            applicable Indian statutes, enactments, acts of the state
            legislature or parliament, laws, ordinances, rules, bye-laws,
            regulations, notifications, guidelines, directions, directives and
            orders of any governmental authority, statutory authority, board,
            recognized stock exchange, as may be applicable including but not
            limited to Guidelines on Managing Risks and Code of Conduct in
            Outsourcing of Financial Services by Banks, Business Correspondent
            Guidelines issued by RBI from time to time, Payment & Settlement
            Systems Act, 2007, Payment & Settlement Systems Regulations, 2008,
            Policy Guidelines on Issuance and operation of Pre-paid Payment
            Instruments in India, and any other guideline in relation to prepaid
            cards issued from time to time by Reserve Bank of India and in each
            case, any implementing regulation or interpretation issued
            thereunder including any successor Applicable Law; “Applicant” shall
            mean You or any individual person above the age of [18 (eighteen)]
            years, using an operational mobile phone connection, who applies
            either on his owner approaches Retail Partner at the Retail Outlet
            locations and/or such other locations, for availing the Company
            Services; “Company Rules” shall mean policies issued by the Company
            with respect to its strategic business partners, retail partners,
            distributors, Consumers including but not limited to the policy on
            the code of conduct and other sales and management policies as
            issued on the Website, Platform and/ or otherwise and amended from
            time to time; “Consumer” shall mean an Applicant who upon submission
            of the CAF and upon completion of necessary formalities, is found to
            be eligible by Company as per guidelines issued by RBI (if any), to
            avail the Company Services and has opened a Membership Account;
            “Governmental Authority” means any nation, state, sovereign, or
            government, any federal, regional, state, local or political
            subdivision and any entity exercising executive, legislative,
            judicial, regulatory or administrative functions of or pertaining to
            government, constitutionally established and having jurisdiction
            over any of the parties (to the extent relevant to the transactions
            contemplated hereby) or the assets or operations of any of the
            foregoing or the transactions contemplated hereby; “INR” or “RS”
            means Indian Rupees, the lawful currency of the Republic of India;
            “Intellectual Property” shall mean all intellectual property used
            for the purpose of or in association with or in relation to
            providing the Company Services utilising the Platform and includes
            without limitation, (a) Software, operating manuals, software code,
            program, instructions, specifications, processes, input methods,
            data or information used in relation to, in association with or for
            the operation of the software installed by Company ; (b) the
            trademarks, service marks, trade names, business names, logos,
            symbols, styles, colour combinations used by Company during the
            course of its business and all depictions, derivations and
            representations thereof; (c) all promotional material including
            without limitation, advertisements, literature, graphics, images,
            content and the ‘look and feel’ of all of the above; and (d) all
            techniques, formulae, patterns, compilations, processes, inventions,
            practices, methodology, techniques, “Tax” or “Taxes” shall mean any
            and all taxes, GST, cess, levies, imposts, duties, charges,
            deposits, fees, deductions or withholdings that are, or that are to
            be, imposed, levied, collected, withheld or assessed, together with
            any and all interest, penalties, claims or other liabilities arising
            under or relating thereto; ACCEPTANCE AND APPOINTMENT AS RETAILER/
            DISTRIBUTOR/ SUPER DISTRIBUTOR
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            MERCHANT'S RIGHTS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            You agree that we may collect, store, and share the information
            provided by you in order to deliver the products and/or services
            availed by you on our Platform and/or contact you in relation to the
            same.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            YOUR RESPONSIBILITIES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            You agree to provide us with true, complete and up-to-date
            information about yourself as may be required for the purpose of
            completing the Transactions. This information includes but is not
            limited to the personal details such as name, email address, phone
            number, delivery address,age, and gender (or any other information
            that we may deem necessary for us to fulfil the Transaction) as well
            as the accurate payment information required for the transaction.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            DISTRIBUTOR
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            3.1 These Terms and Conditions shall come into force from the date
            (Effective Date) of Retailer/ Partner / Distributor/Super
            Distributor Application Form attached herewith. Within 30 (thirty)
            days from the date of acceptance by Retailer/ Partner /
            Distributor/Super Distributor, the Retailer/ Partner /
            Distributor/Super Distributor shall commence business in accordance
            with these Terms and Conditions. 3.2 The Retailer/ Partner /
            Distributor/Super Distributor acknowledges that it has read and
            understood these Terms and Conditions at the time of making an
            application to ADMPay for operation of a retail outlet to provide
            the Services (as defined herein) under the name and style of
            “ADMPay” and that it has had sufficient time to evaluate the
            financial requirements, equipment required to conduct the business,
            services applicable/ enable in his area of operation and risks
            associated with the establishment and operation of the retail
            outlet. 3.3 : During the Term and subject to these Terms and
            Conditions, ADMPay hereby appoints the Retailer/ Partner /
            Distributor/Super Distributor and the Retailer/ Partner /
            Distributor/Super Distributor hereby accepts the appointment as a
            ADMPay Retailer/ Partner / Distributor/Super Distributor, to
            establish and operate a retail outlet at such address as specified
            in the Retailer/ Partner / Distributor/Super Distributor application
            form attached herewith for the purpose of marketing, selling and
            providing the Services (“Retail Outlet”). No changes to the address
            as mentioned in the Retailer/ Partner / Distributor/Super
            Distributor Application form shall be permitted, except with the
            prior written consent from ADMPay whereas such consent shall be
            signed by the Authorized Representative of the level of Vice
            President or above. 3.4 The appointment of the Retailer/ Partner /
            Distributor/Super Distributor under these Terms and Conditions shall
            remain valid up to the termination (“Term”). ADMPay may exercise its
            right of withdrawal by giving a notice in writing to the Retailer/
            Partner / Distributor/Super Distributor 1 (one) month prior to
            withdrawal unless any breach of this agreement by the Retailer/
            Partner / Distributor/Super Distributor. 3.5 The Retailer/ Partner /
            Distributor/Super Distributor may describe himself as an 'authorized
            Retailer/ Partner / Distributor/Super Distributor' of ADMPay, but
            must not hold [itself/himself] out as being entitled to bind ADMPay
            in any way. The Retailer/ Partner / Distributor/Super Distributor
            shall not make, cause or permit, directly or indirectly, any
            description or projection of itself as a partner or employee or
            officer or representative of ADMPay. 3.6 ADMPay is in the business
            of facilitating/distributing/marketing/providing of
            product(s)/service(s) of various service providers to enable them to
            expand the distribution networks for the services provided by them.
            3.7 The Retailer/ Partner / Distributor/Super Distributor has
            understood the business model and aware that ADMPay is just a
            facilitator and distributor of products and services and does not
            own such services or products by itself. ADMPay takes reasonable
            efforts to make available the services and products, however, shall
            not be liable and responsible for any deficiency of such services
            and products. ADMPay further also takes reasonable efforts to
            provide its best uninterrupted services at best quality; however,
            technological systems are prone to interruption for upgradation,
            maintenance, break down of either the systems of ADMPay or that of
            the Service Providers’. The Retailer/ Partner / Distributor/Super
            Distributor shall be managing his business considering such
            interruptions.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            PAYMENTS AND COMMISSIONS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            4.1 Non Refundable Registration Fee: The Retailer/ Partner /
            Distributor/Super Distributor shall deposit such an amount
            (“Registration Fees”) by way of a non-refundable registration fee as
            per commercial terms defined by ADMPay on or before the Effective
            Date. 4.2 Working Capital: The Retailer/ Partner / Distributor/Super
            Distributor shall maintain and deposit with ADMPay working capital
            (“Working Capital”) in a bank designated and intimated to the
            Retailer/ Partner / Distributor/Super Distributor for this purpose
            (“Designated Bank”) which will be an interest free deposit. The
            Working Capital limit may be increased from time to time by way of
            written intimation to the Retailer/ Partner / Distributor/Super
            Distributor. The Retailer/ Partner / Distributor/Super Distributor
            shall immediately deposit such further amounts to ensure that the
            Working Capital is maintained at the aforementioned amounts at all
            times. 4.3 Working Capital Limit: The Retailer/ Partner /
            Distributor/Super Distributor shall be entitled to a credit limit
            equivalent to the Working Capital balance in the books of ADMPay
            (“Credit Limit”). The Retailer/ Partner / Distributor/Super
            Distributor may enter into transactions up to the value of the
            existing Credit Limit. In the event the value of the transactions
            exceed the Credit Limit, all further transactions exceeding the
            Credit Limit shall automatically be blocked until the Credit Limit
            is sufficient to permit further transactions. In the event the
            Retailer/ Partner / Distributor/Super Distributor desires to enter
            into transactions in excess of the Credit Limit, the Retailer/
            Partner / Distributor/Super Distributor shall deposit the amount
            either with the Distributor or ADMPay as the case may be to increase
            its Credit Limit accordingly. The Distributor/ ADMPay shall, at
            their sole discretion, permit enhancement of the Credit Limit. If
            the amount is deposited with the Distributor, the Retailer/ Partner
            / Distributor/Super Distributor need to obtain proper receipt and
            the limit gets enhanced from the Distributor. ADMPay shall not be
            responsible for any liabilities in such an event. 4.4 Commission:
            The Retailer/ Partner / Distributor/Super Distributor shall be
            entitled to commission, which shall be adjusted on a daily
            basis/monthly basis/transaction basis, for the provision of the
            Services at a rate to be intimated by ADMPay to the Retailer/
            Partner / Distributor/Super Distributor from time to time through
            its portal, either by way of credit to the Working Capital or the
            Retailer/ Partner / Distributor/Super Distributor may deduct the
            commission due to it, prior to depositing the proceeds of a
            transaction in the Current Account. The Retailer/ Partner /
            Distributor/Super Distributor shall be regularly updated on the
            Rates of Commission through the Portal. ADMPay, at its sole
            discretion shall decide the sharing of Gross Margin with the
            Retailer/ Partner / Distributor/Super Distributors and its decision
            will be final. It is presumed that the Retailer/ Partner /
            Distributor/Super Distributor has agreed to such commission / margin
            before the transaction. Any dispute in this regards will not be
            admissible by ADMPay. 4.5 Prices and discounts: All prices, charges,
            fees and discounts for all ADMPay Services shall be determined, and
            may from time to time be revised, by ADMPay at its sole discretion.
            The Retailer/ Partner / Distributor/Super Distributor shall not
            collect cash from the customers by offering discounts on the
            Services which do not have ADMPay's sanction. The Retailer/ Partner
            / Distributor/Super Distributor shall also not provide any
            incentives, subsidies or do any act/ omission or thing, which shall
            have the effect of providing incentives or subsidies on the
            Services. The Retailer/ Partner / Distributor/Super Distributor
            acknowledge that ADMPay has the right to alter the prices or nullify
            any sales that have been entered in the portal. 4.6 Taxes: All
            current and/or future taxes or similar fees including without
            limitation GST, value added tax, service tax and other local or
            municipal taxes shall be payable by the Retailer/ Partner /
            Distributor/Super Distributor. Such amounts shall not be retained by
            the Retailer/ Partner / Distributor/Super Distributor while
            retaining its commission. Payments made to the Retailer/ Partner /
            Distributor/Super Distributor shall be subject to such withholdings
            as prescribed under applicable law. Subject to the aforesaid, ADMPay
            assumes no responsibility for the tax compliance of the Retailer/
            Partner / Distributor/Super Distributor. 4.7 Costs: All costs and
            expenses for operation of ADMPay Kiosk including but not limiting to
            electricity, telephone, staff salary, traveling, promotional
            activities and other similar out-of-pocket expenses incurred in the
            performance of the Services shall be borne by the Retailer/ Partner
            / Distributor/Super Distributor. 4.8 Activity/Inactivity charges: A
            minimum monthly charges plus Taxes may be levied by ADMPay and the
            same shall be deducted from the Retailer/ Partner /
            Distributor/Super Distributor’s Working Capital balance. The
            Retailer/ Partner / Distributor/Super Distributor hereby agrees and
            acknowledges to pay such charges as intimated to the Retailer/
            Partner / Distributor/Super Distributor from to time. 4.9 Set off:
            ADMPay may, deduct sums due from the Retailer/ Partner /
            Distributor/Super Distributor under these Terms and Conditions from
            any sums due to the Retailer/ Partner / Distributor/Super
            Distributor under the same and the Retailer/ Partner /
            Distributor/Super Distributor hereby consents to such set off being
            made by ADMPay.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            EMPLOYEES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            5.1 The Retailer/ Partner / Distributor/Super Distributor shall be
            solely responsible for all such personnel employed by it, including
            payment of wages, making of contributions under various labour laws,
            such as the Employees Provident Fund and Miscellaneous Provisions
            Act, 1952, the Employees State Insurance Act, 1948, etc. 5.2 The
            Retailer/ Partner / Distributor/Super Distributor acknowledges that
            it shall be responsible for all acts and omissions of its employees,
            subordinates, agents, aforesaid assignees or other personnel engaged
            by the Retailer/ Partner / Distributor/Super Distributor. 6.
            EXCLUSIVITY AND NON COMPETE 6.1 During the continuation Term of this
            agreement, the Retailer/ Partner / Distributor/Super Distributor
            shall not, directly or indirectly, through any other person, firm,
            corporation or other entity (whether as an officer, director,
            employee, partner, consultant, and holder of equity or debt
            investment, lender or in any other manner or capacity): (a) market,
            offer and/or perform services similar to that being developed,
            offered or sold by ADMPay; (b)solicit, induce, encourage or attempt
            to induce or encourage any employee or consultant of ADMPay to
            terminate his or her employment or consulting relationship with
            ADMPay, or to breach any other obligation to ADMPay; (c) solicit,
            interfere with, disrupt, alter or attempt to disrupt or alter the
            relationship, contractual or otherwise, between ADMPay and any other
            person including, without limitation, any consultant, contractor,
            customer, potential customer, or supplier of ADMPay; or (d) engage
            in or participate in any business conducted under any name that
            shall be the same as or similar to the name of ADMPay or any trade
            name used by ADMPay.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            INTELLECTUAL PROPERTY
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            6.1 No license under any patents, copyrights, trademarks or any
            other intellectual property rights of ADMPay / its affiliates / its
            Service Provider(s) / third party(ies) is granted to or conferred
            upon to the Retailer/ Partner / Distributor/Super Distributor by
            virtue of being the Retailer/ Partner / Distributor/Super
            Distributor of ADMPay. The Retailer/ Partner / Distributor/Super
            Distributor shall not acquire any interest and right on the
            trademark(s), trade name(s), logo, etc. of other party including
            ADMPay by virtue of this Agreement and shall not use the logos,
            trademark of ADMPay/owner of intellectual property on including
            interalia the Retailer/ Partner / Distributor/Super Distributor’s
            Rubber stamps, letterheads, Visiting Cards, websites etc. and/or any
            such material in whatsoever manner. 7.2. The Retailer/ Partner /
            Distributor/Super Distributor agrees to protect the logo, trade name
            and trademark of ADMPay and not use the same, in any unauthorised
            manner, whatsoever, including interalia as a tool for acknowledging
            payments accepted by the Retailer/ Partner / Distributor/Super
            Distributor/his representative, thereby creating false impression
            about the authenticity of such acknowledgment / receipt. The
            Retailer/ Partner / Distributor/Super Distributor hereby undertakes
            to indemnify, defend and hold ADMPay harmless for all loss(es) /
            damage(s) arising due to infringement of this clause. The Retailer/
            Partner / Distributor/Super Distributor is aware of the
            consequences, if at all, the Retailer/ Partner / Distributor/Super
            Distributor and/or his representative are found in unauthorized use
            of ADMPay logo/ trade name(s) in any manner, then strict action
            shall be taken against the Retailer/ Partner / Distributor/Super
            Distributor, including permanent deactivation of his Services, but
            not limited to any other legal action which ADMPay may deem fit and
            proper, under the provisions of law.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            CONFIDENTIALITY AND SECURITY
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            We implement appropriate security measures and privacy-protective
            features on our Platform including encryption, password protection,
            call masking, and physical security measures to protect your
            personal data from unauthorised access and disclosure, and follow
            standards prescribed by applicable law. 8.1 The Retailer/ Partner /
            Distributor/Super Distributor agrees that all information disclosed
            by ADMPay or which the Retailer/ Partner / Distributor/Super
            Distributor gets in the course of negotiating this Agreement is
            confidential in nature and hence cannot be disclosed. Each Party may
            disclose the existence of this Agreement, but agrees that the terms
            and conditions of this Agreement will be treated as Confidential
            Information; provided, however, that each Party may disclose the
            terms and conditions of this Agreement: (a) as required by any court
            or other governmental body; (b) as otherwise required by law; (c) to
            legal counsel of the Parties; (d) in confidence, to accountants,
            banks, and financing sources and their advisors; (e) in connection
            with the enforcement of this Agreement or rights under this
            Agreement; or (f) in confidence, in connection with an actual or
            proposed merger, acquisition or similar transaction. 8.2 The
            Retailer/ Partner / Distributor/Super Distributor also agrees that
            on and from the date of this Agreement all information, which the
            Retailer/ Partner / Distributor/Super Distributor may obtain from
            ADMPay pursuant to this Agreement, shall be kept confidential by the
            Retailer/ Partner / Distributor/Super Distributor and shall not be
            disclosed to any third party, save and except with the prior written
            consent of the ADMPay.
          </Text> */}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default page;
