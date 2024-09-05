"use client";

import Head from 'next/head';
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect } from 'react';
function createData(
  service: string,
  subServices: { subServiceId: number; subService: string; price: string }[]
) {
  return {

    service,
    totalSubService: subServices.length,
    subService: subServices,
  }
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>

      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton className='text-iconBg dark:text-gray-300'
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell className='text-iconBg dark:text-gray-400' component="th" scope="row">
            {row.service}
          </TableCell>
          <TableCell className='text-iconBg dark:text-gray-400' align="right">{row.totalSubService}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='border-b border-secBackground  dark:border-none' style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box className='border-b border-header dark:border-gray-900' sx={{ margin: 1 }}>
                <Typography className='text-header dark:text-gray-300' variant="h6" gutterBottom component="div">
                  Detail of the services
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead className='' >
                    <TableRow className='border border-header  dark:border-none' >
                      <TableCell className='text-iconBg font-headingFont font-bold dark:text-gray-400'>S.No</TableCell>
                      <TableCell className='text-iconBg font-headingFont font-bold dark:text-gray-400'>Sub Service</TableCell>

                      <TableCell className='text-iconBg font-headingFont font-bold dark:text-gray-400 ' align="right">Amount</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody className='border border-header  dark:border-none' >
                    {row.subService.map((sebServiceRow) => (
                      <TableRow className='border border-header dark:border-none dark:text-gray-500' key={sebServiceRow.subService}>
                        <TableCell className='text-header font-subheadingFont dark:text-gray-500 '>{sebServiceRow.subServiceId}</TableCell>
                        <TableCell className='text-header font-subheadingFont dark:text-gray-500 ' component="th" scope="row">
                          {sebServiceRow.subService}
                        </TableCell>

                        <TableCell className='text-header font-subheadingFont dark:text-gray-500 ' align="right">{sebServiceRow.price}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </>
  );
}
// Sample Data with Different Sub-Services
const rows = [
  createData(' Hair Cut & Style', [
    { subServiceId: 1, subService: 'Ladies Hair Cut', price: "799/999" },
    { subServiceId: 2, subService: 'Gents Hair Cut', price: "399/449" },
    { subServiceId: 3, subService: 'Child Hair Cut', price: "199/249" },
    { subServiceId: 4, subService: 'Loreal Hair Spa', price: "1499" },
    { subServiceId: 5, subService: 'Moroccan Hair Spa', price: "1999" },
    { subServiceId: 6, subService: 'Root Touch Up', price: "1499/1799" },
    { subServiceId: 7, subService: 'Biotop Treatment', price: "2499" },
    { subServiceId: 8, subService: 'Root Deep Treatment', price: "2499" },
    { subServiceId: 9, subService: 'Hair Extension', price: "1499" },
    { subServiceId: 10, subService: 'Eyelash Extension', price: "3499" },
  ]),
  createData('Chemical Services', [
    { subServiceId: 1, subService: 'Global Hair Color(Gents)', price: "1499/1799" },
    { subServiceId: 2, subService: 'Global Hair Color(Ladies)', price: "2499/2999" },
    { subServiceId: 3, subService: 'Balayage', price: "4999" },
    { subServiceId: 4, subService: 'Ombre', price: "5444" },
    { subServiceId: 5, subService: 'Keratein Treatment Starting', price: "3999" },
    { subServiceId: 6, subService: 'Botox Starting', price: "4999" },


  ]),
  createData(' Facial and Waxing', [
    { subServiceId: 1, subService: 'Basic Facial Starting', price: "699" },
    { subServiceId: 2, subService: 'Premium Facial Starting', price: "1499" },
    { subServiceId: 3, subService: 'Face Detan', price: "499" },
    { subServiceId: 4, subService: 'Jennot Facial', price: "399" },
    { subServiceId: 5, subService: 'Face Cleanup', price: "999/1499/1999" },
    { subServiceId: 6, subService: 'Honey Hand Wax', price: "499" },
    { subServiceId: 7, subService: 'Leg Half/Full Wax', price: "449/699" },
    { subServiceId: 8, subService: 'Under Arm Wax(Both)', price: "149" },
    { subServiceId: 9, subService: 'Rice Hand Wax', price: "699" },



  ]),
  createData('Nails', [
    { subServiceId: 1, subService: 'Nail Gel Paints', price: "599" },
    { subServiceId: 2, subService: 'Nail Extension)', price: "1999" },
    { subServiceId: 3, subService: 'Nail Refilling', price: "1199" },
    { subServiceId: 4, subService: 'French Nail Refilling', price: "1499" },
    { subServiceId: 5, subService: 'Overlay', price: "899" },
    { subServiceId: 6, subService: 'Glitter Half', price: "299" },
    { subServiceId: 7, subService: 'Glitter Full', price: "499" },
    { subServiceId: 8, subService: 'Chroma', price: "599" },
    { subServiceId: 9, subService: 'Stone Per piece', price: "20" },
    { subServiceId: 10, subService: 'Nail Brush Art Per FInger', price: "150" },
    { subServiceId: 11, subService: 'Tape Line Per Finger', price: "15" },
    { subServiceId: 12, subService: 'Ombre', price: "499" },
    { subServiceId: 13, subService: 'Cateye', price: "199" },
    { subServiceId: 14, subService: 'Removal', price: "499" },


  ]),
  createData('Pedicure & Manicure', [
    { subServiceId: 1, subService: 'Pedicure', price: "699/899/1199/1499" },
    { subServiceId: 2, subService: 'Manicure', price: "599/799/1099/1299" },
    { subServiceId: 3, subService: 'Hand Polishing(Both Hands) ', price: "699" },
    { subServiceId: 4, subService: 'Leg Polishing', price: "999/1499" },
    { subServiceId: 5, subService: 'Body Polishing', price: "2499/3499" },
    { subServiceId: 6, subService: 'Body Massage', price: "999/1999" },

  ]),
  createData('Makeup', [
    { subServiceId: 1, subService: 'Bridal Makeup Starting', price: "4999" },
    { subServiceId: 2, subService: 'Groom Makeup Starting', price: "2499" },
    { subServiceId: 3, subService: 'Light Party Makeup ', price: "699" },
    { subServiceId: 4, subService: 'Haldi/Sangeet/Mehendi Makeup Starting', price: "999" },
    { subServiceId: 5, subService: 'Eye Makeup', price: "249" },
    { subServiceId: 6, subService: 'Hair Do Starting', price: "699" },
    { subServiceId: 7, subService: 'Saree Drapping', price: "699/999" },

  ]),
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Salon Services",
  "provider": {
    "@type": "Organization",
    "name": "Salon 85",
    "url": "https://salon85.in",
    "logo": "/path-to-logo.png",
    "sameAs": [
      "https://www.instagram.com/salon85kolkata/",
      "https://www.facebook.com/Salon85parkstreet"
    ]
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Varies",
    "url": "https://salon85.in/pricing",
    "description": "Haircut, Makeup, Spa, and other beauty services for men and women in Kolkata."
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Salon 85 Service Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Haircut & Style",
          "offers": [
            { "@type": "Offer", "price": "800", "priceCurrency": "INR", "name": "Ladies Haircut" },
            { "@type": "Offer", "price": "400", "priceCurrency": "INR", "name": "Gents Haircut" }
          ]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chemical Services",
          "offers": [
            { "@type": "Offer", "price": "1499", "priceCurrency": "INR", "name": "Global Hair Color (Gents)" }
          ]
        }
      }
    ]
  }
};

export default function Price() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);
  return (
    <>
    <Head>
        <title>Salon 85 - Pricing & Services</title>
        <meta name="description" content="Discover the premium pricing of Salon 85 for haircuts, makeup, styling, and other beauty services in Kolkata. Explore our extensive range of VIP salon services for men and women." />
        <meta name="keywords" content="Salon 85, VIP Salon, haircuts, makeup, styling, Kolkata, beauty services, hair spa, bridal makeup, waxing, nails" />
        <meta property="og:title" content="Salon 85 - Explore Our Pricing & Services" />
        <meta property="og:description" content="Salon 85 offers exclusive pricing for luxury haircuts, spa treatments, bridal makeup, and more. Check out our pricing and sub-services." />
        <meta property="og:image" content="/path-to-social-preview-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://salon85.in/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salon 85 - Pricing & Services" />
        <meta name="twitter:description" content="Check out Salon 85’s premium services pricing for men and women, located in Park Street, Kolkata." />
      </Head>

      <div className="mx-auto my-3 py-8 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto pt-12 lg:pt-4  max-w-xl pb-9 text-center">
          <div className="mx-auto inline-flex rounded-full bg-iconBg dark:bg-black px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-background">
              Our Pricing
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
            Explore Our Pricing
          </h2>
        </div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            width: '100%',
            maxWidth: '100%',
            zIndex: 10,
            backgroundColor: '#FFF3EB',
          }}
        >
          <TableContainer
            className='bg-background  bg-gradient-to-br shadow-lg rounded-xl dark:from-zinc-900 dark:to-gray-900 border border-iconBg dark:border-gray-300'
            component={Paper}
            sx={{ maxWidth: '100%', zIndex: 10, backgroundColor: 'inherit' }}  
          >
            <Table aria-label="collapsible table">
              <TableHead className='bg-iconBg dark:bg-black' >
                <TableRow>
                  <TableCell />
                  <TableCell className='text-background  font-headingFont font-bold dark:text-gray-300 ' sx={{  backgroundColor: 'inherit' }}  >Service</TableCell>
                  <TableCell className='text-background font-headingFont font-bold dark:text-gray-300' align="right" sx={{  backgroundColor: 'inherit' }}  >Total Sub-Services</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.service} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
}
