import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, TextField, Box, Dialog, Card, CardMedia, CardContent, IconButton,
  Slide, Snackbar, Chip, Badge, Tooltip, Zoom
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const menuItems = [




  { id: 1, name: 'Dum Biryani', price: 180, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', type: 'non-veg' },
  { id: 2, name: 'Chicken Dum Biryani', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFA5ShoU4usCBWKhDxSLi_E9qs83Z-NLcHIC33IYqlj746p9qjbNQRji35ZCW5sFBbqo&usqp=CAU', type: 'non-veg' },
  { id: 3, name: 'Hyderabadi Biryani', price: 260, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKgtA-Dy7-xyFx_7kokpInm2C6pSRlXilHQ&s', type: 'non-veg' },
  { id: 4, name: 'Chicken Dum Biryani', price: 280, img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg', type: 'non-veg' },
  { id: 5, name: 'Lamb Biryani', price: 300, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Umhh7-V1xSRS1bwU3kZ05QZB1IK4crFDA8Rxy0Bss8IKeV1kmkFzLYq8hp1UnG415dQ&usqp=CAU', type: 'non-veg' },
  { id: 6, name: 'Restaurant Style Veg Biryani', price: 180, img: 'https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-2.jpg', type: 'veg' },



{ id: 7, name: 'HYDERABADI MUTTON BIRYANI', price: 800, img: 'https://cookwithnoorain.com/wp-content/uploads/2024/06/IMG_2487-scaled.jpg', type: 'non-veg' },


{ id: 8, name: 'The Biryani king of Hyderabad', price: 300, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-mUXKiQH4jHtyc5nR--_cBVMz9pJVzgvadri4fdlr58nGkMdlM9k06XqPzS-kju7DCk&usqp=CAU', type: 'non-veg' },


{ id: 9, name: 'Hyderabadi Veg Biryani', price: 220, img: 'https://www.cookshideout.com/wp-content/uploads/2017/03/Hyderabadi-Veg-Biryani-Thali-FI.jpg', type: 'veg' },


{ id: 10, name: 'Hyderabad Vegetable biryani', price: 240, img: 'https://artofpalate.com/wp-content/uploads/2016/11/vegetable-biryani-recipe.jpg', type: 'veg' },


{ id: 11, name: 'Hyderabadi Chicken Dum Biryani', price: 320, img: 'https://yummyindiankitchen.com/wp-content/uploads/2015/08/chicken-dum-biryani-hyderabadi.jpg', type: 'non-veg' },


{ id: 12, name: 'Meghduth Biryanis in kondapur,Hyderabad', price: 340, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu02KHB4bRuJzOVGLuOoquEculyQ4Bafgx7w&s', type: 'non-veg' },


{ id: 13, name: 'Chennai Buhari Hotel Style Chicken Biryani ', price: 350, img: 'https://www.kannammacooks.com/wp-content/uploads/buhari-hotel-chennai-chicken-biryani-recipe-1-4.jpg', type: 'non-veg' },


{ id: 14, name: 'Kachhi Chicken Biryani', price: 290, img: 'https://madhurasrecipe.com/wp-content/uploads/2022/12/Chicken-Biryani-Featured.jpg', type: 'non-veg' },


{ id: 15, name: 'Bombay Chicken Biryani - Pakistani Biryani', price: 320, img: 'https://www.tipsnrecipesblog.com/wp-content/uploads/2025/07/Bombay-chicken-biryani-main-.jpg', type: 'non-veg' },


{ id: 16, name: 'Authentic Chicken Biryani', price: 280, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4YvMhM_nTQUaURl-g8aU4P-A6TLxValftT0Z8TLE0vj7mmgKXQHCBPxBukQPatEpwIQ&usqp=CAU', type: 'non-veg' },


{ id: 17, name: 'Karachi Style Deghi Chicken Biryani', price: 310, img: 'https://i.pinimg.com/736x/63/43/6b/63436bedd4a0c297c08043ea5c129b50.jpg', type: 'non-veg' },


{ id: 18, name: 'Chicken tikka biryani', price: 300, img: 'https://butteroverbae.com/wp-content/uploads/2020/03/tikka-biryani-27.jpg', type: 'non-veg' },


{ id: 19, name: 'Vegetable Biryani', price: 250, img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg', type: 'veg' },


{ id: 20, name: 'Instant Pot Vegetable Biryani Recipe', price: 260, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhv9HbV9ACItA4DV-4G5SEisK2wu4-DC0DiLnCnWyQkr9nND875A5DHKW52ChKOT5yD8&usqp=CAU', type: 'veg' },


{ id: 21, name: 'Restaurant Style Veg Biryani', price: 270, img: 'https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-2.jpg', type: 'veg' },


{ id: 22, name: 'Restaurant Veg Biryani', price: 280, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTio4cqcUN5N4911boRL5hIIopokXPwjz9zMA&s', type: 'veg' },


{ id: 23, name: 'Veg Dum Biryani', price: 320, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNwY0o2Q1-A6A4vW10e9m49Oew4y7uDXw5oWt5XSQL4QLHYYknsjp_eAciplcnbmiTOk&usqp=CAU', type: 'veg' },


{ id: 24, name: 'Restaurant Style Veg Biryani', price: 330, img: 'https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-2.jpg', type: 'veg' },


{ id: 25, name: 'Zero Oil – Healthy Veg Biryani', price: 310, img: 'https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC07512-1300x731.jpg?v=1699167800', type: 'veg' },


{ id: 26, name: 'Jeera Rice Veg Biryani Recipe', price: 300, img: 'https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/01/Seeraga-samba-biryani.jpg?ssl=1', type: 'veg' },


{ id: 27, name: 'Paneer Biryani', price: 380, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvsruVQmiGoj7cB3P-ggQezrUnoANHcsQ4A&s', type: 'veg' },



{ id: 28, name: 'Veg Minty Paneer Biryani', price: 400, img: 'https://www.mintsrecipes.com/wp-content/uploads/Mint-Paneer-Veg-Biriyani-fb1.jpg', type: 'veg' },




{ id: 29, name: 'Paneer Matar Masala Pulao in cooker', price: 420, img: 'https://vismaifood.com/storage/app/uploads/public/aef/274/4e7/thumb__1200_0_0_0_auto.jpg', type: 'veg' },

{ id: 30, name: 'Paneer Biryani ', price: 360, img: 'https://ministryofcurry.com/wp-content/uploads/2023/10/Laxmi-Paneer-Biryani_-5.jpg', type: 'veg' },

{ id: 31, name: 'Hyderabadi Egg Dum Biryani ', price: 280, img: 'https://vismaifood.com/storage/app/uploads/public/f14/664/f87/thumb__700_0_0_0_auto.jpg', type: 'non-veg' },

{ id: 32, name: 'Instant Pot Egg Biryani', price: 300, img: 'https://spicecravings.com/wp-content/uploads/2020/10/Egg-Biryani-Featured-1.jpg', type: 'non-veg' },

{ id: 33, name: 'Authentic Dum Egg Biryani', price: 320, img: 'https://sinfullyspicy.com/wp-content/uploads/2025/04/1200-by-1200-images-2.jpg', type: 'non-veg' },

{ id: 32, name: 'One pot egg biryani', price: 340, img: 'https://kitchenmai.com/wp-content/uploads/2019/11/egg_bir2_blog.jpg', type: 'non-veg' },

{ id: 33, name: 'fish biryani', price: 450, img: 'https://yummyindiankitchen.com/wp-content/uploads/2021/07/fish-biryani-machhali-biryani.jpg', type: 'non-veg' },

{ id: 34, name: 'Instant Pot Fish Biryani', price: 460, img: 'https://ministryofcurry.com/wp-content/uploads/2019/05/fish-biryani-1-2-1.jpg', type: 'non-veg' },



{ id: 35, name: 'Fish Biryani Recipe', price: 430, img: 'https://i.ytimg.com/vi/kEsTKMM7TyY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDoyA_Bw9Fp_G5o0hL50LnV2XbojQ', type: 'non-veg' },

{ id: 36, name: 'Malabar Fish Biryani', price: 450, img: 'https://www.recipesaresimple.com/wp-content/uploads/2015/06/recipe-for-malabar-fish-biryani.jpg', type: 'non-veg' },

{ id: 38, name: 'Goan Fish Biryani ', price: 500, img: 'https://thespiceadventuress.com/wp-content/uploads/2015/04/4.jpg', type: 'non-veg' },

{ id: 39, name: 'Prawn Biryani Recipe', price: 480, img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg', type: 'non-veg' },

{ id: 40, name: 'Prawn Dum Biryani', price: 500, img: 'https://happietrio.com/wp-content/uploads/2016/05/PrawnBiryani-500x500.jpg', type: 'non-veg' },

{ id: 41, name: 'Eral Biryani (Coconut Milk)', price: 340, img: 'https://www.kannammacooks.com/wp-content/uploads/Prawn-Pulao-With-Coconut-Milk-Recipe-1-4.jpg', type: 'non-veg' },

{ id: 42, name: 'Easy Kachhi Chicken Biryani', price: 290, img: 'https://madhurasrecipe.com/wp-content/uploads/2022/12/Chicken-Biryani-Featured.jpg', type: 'non-veg' },

{ id: 43, name: 'Easy Shrimp / Prawn Biryani', price: 320, img: 'https://simpleindianmeals.com/wp-content/uploads/2014/01/Prawns-Biryani.jpg', type: 'non-veg' }




















];

const GST_RATE = 0.05;

function RestaurantMenu() {
  const [order, setOrder] = useState(() => {
    const saved = localStorage.getItem('biryani_order');
    return saved ? JSON.parse(saved) : [];
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [highlighted, setHighlighted] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aboutOpen, setAboutOpen] = useState(false);
  const [preparationDialog, setPreparationDialog] = useState(false);
  const orderRef = useRef();

  useEffect(() => {
    localStorage.setItem('biryani_order', JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    if (highlighted !== null) {
      const timeout = setTimeout(() => setHighlighted(null), 800);
      return () => clearTimeout(timeout);
    }
  }, [highlighted]);

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSnackbar = () => {
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 1200);
  };

  const addToOrder = (item) => {
    setHighlighted(item.id);
    const existing = order.find((o) => o.id === item.id);
    if (existing) {
      setOrder(order.map(o => o.id === item.id ? { ...o, quantity: o.quantity + 1 } : o));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
    handleSnackbar();
  };

  const removeFromOrder = (id) => setOrder(order.filter(item => item.id !== id));
  const changeQuantity = (id, delta) => {
    setOrder(order.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const subtotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;

  const handlePrepare = () => {
    setPreparationDialog(true);
    setTimeout(() => setPreparationDialog(false), 1800);
  };

  const [loaded, setLoaded] = useState({});
  const handleImageLoad = (id) => setLoaded(prev => ({ ...prev, [id]: true }));

  const scrollToOrder = () => {
    if (orderRef.current) {
      orderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: 'cover',
      pb: 6,
      position: 'relative'
    }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: 'goldenrod', mb: 5 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Georgia' }}>Biryani House</Typography>
          <Button color="inherit" onClick={() => setAboutOpen(true)}>About</Button>
          <Button color="inherit" onClick={() => window.location.href = 'mailto:contact@biryanihouse.com'}>Contact</Button>
        </Toolbar>
      </AppBar>
      {/* About Dialog */}
      <Dialog open={aboutOpen} onClose={() => setAboutOpen(false)}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>About Us</Typography>
          <Typography>Experience authentic flavors at Biryani House. We serve the finest biryanis with a passion for quality and taste. All dishes are fresh, authentic, and made with love!</Typography>
          <Button sx={{ mt: 2 }} variant="contained" color="warning" onClick={() => setAboutOpen(false)}>Close</Button>
        </Box>
      </Dialog>
      {/* Search Bar */}
      <Box sx={{ maxWidth: 900, mx: 'auto', bgcolor: 'rgba(0,0,0,0.6)', p: 4, borderRadius: 3, boxShadow: 6 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search menu…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          sx={{
            mb: 4,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 3,
            input: {
              fontWeight: 600,
              fontSize: 22,
              p: 2,
              height: "36px"
            },
            '& .MuiOutlinedInput-root': {
              minHeight: 56,
              '& fieldset': {
                borderColor: 'goldenrod',
                borderWidth: 2,
              },
              '&:hover fieldset': {
                borderColor: 'gold',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'goldenrod',
                borderWidth: 3,
              }
            }
          }}
          InputProps={{
            style: { fontWeight: 600, fontSize: 22, paddingLeft: 18 }
          }}
        />
        {/* Square, four-per-row menu cards */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
          mb: 3,
          justifyItems: 'center'
        }}>
          {filteredMenu.length === 0 && (
            <Typography sx={{ color: 'white', opacity: 0.75, py: 5, textAlign: 'center' }} variant="subtitle1">
              🎉 Sorry, no biryani matches your search!
            </Typography>
          )}
          {filteredMenu.map(item => (
            <Card
              key={item.id}
              sx={{
                width: 180,
                height: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(255,255,255,0.14)',
                color: 'white',
                transition: 'transform 0.24s, box-shadow 0.22s, border 0.15s',
                boxShadow: 1,
                border: '2px solid transparent',
                overflow: 'visible',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.045)',
                  boxShadow: '0 8px 32px 0 rgba(218,165,32,0.19), 0 1.5px 4px rgba(0,0,0,0.12)',
                  border: '2.3px solid gold',
                  bgcolor: 'rgba(255,255,255,0.23)'
                }
              }}
            >
              <Box
                position="relative"
                sx={{
                  width: 90,
                  height: 90,
                  mb: 1,
                  mt: 1
                }}
              >
                {!loaded[item.id] && (
                  <Box sx={{ width: 90, height: 90, borderRadius: 2, background: '#eac884', filter: 'blur(8px)' }} />
                )}
                <CardMedia
                  component="img"
                  onLoad={() => handleImageLoad(item.id)}
                  style={{
                    opacity: loaded[item.id] ? 1 : 0.6,
                    filter: loaded[item.id] ? 'none' : 'blur(7px)',
                    transition: '0.35s'
                  }}
                  image={item.img}
                  alt={item.name}
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: 2,
                    objectFit: 'cover',
                    position: 'relative',
                    boxShadow: 3
                  }}
                />
                {/* Badge for type */}
                <Chip
                  label={item.type === 'veg' ? 'Veg' : 'Non-Veg'}
                  size="small"
                  sx={{
                    position: 'absolute',
                    left: 5,
                    top: 5,
                    background: item.type === 'veg' ? '#388e3c' : '#b91c1c',
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 1
                  }}
                />
                {/* Animated "Added" badge */}
                {highlighted === item.id && (
                  <Zoom in style={{ position: 'absolute', right: 5, top: 5 }} timeout={300}>
                    <Chip label="Added!" color="warning" sx={{ fontWeight: 'bold', fontSize: 15, px: 2, boxShadow: 4 }} />
                  </Zoom>
                )}
              </Box>
              <CardContent sx={{ px: 1, textAlign: 'center', pt: 0, pb: 0 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.08rem', fontWeight: 500 }}>{item.name}</Typography>
                <Typography sx={{ color: 'goldenrod', fontWeight: 600, fontSize: 16 }}>₹{item.price}</Typography>
              </CardContent>
              <Tooltip title="Add to Order" arrow>
                <IconButton
                  color="warning"
                  onClick={() => addToOrder(item)}
                  sx={{
                    mt: 1,
                    mb: 1,
                    transition: 'box-shadow 0.21s, background 0.21s, transform 0.17s',
                    bgcolor: 'rgba(255,215,0,0.7)',
                    '&:hover': {
                      bgcolor: 'gold',
                      boxShadow: '0 0 14px 4px gold',
                      transform: 'scale(1.13)'
                    }
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </Card>
          ))}
        </Box>
        {/* Order Summary */}
        <Box ref={orderRef}>
          {order.length > 0 ? (
            <Box sx={{ bgcolor: 'rgba(0,0,0,0.74)', p: 3, borderRadius: 2, boxShadow: 7, mt: 3 }}>
              <Typography variant="h5" gutterBottom>Your Order</Typography>
              {order.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                    p: 1,
                    borderRadius: 1,
                    transition: 'background 0.18s',
                    '&:hover': {
                      background: 'rgba(255,215,0,0.17)'
                    }
                  }}
                >
                  <Typography sx={{ flex: 1 }}>{item.name}</Typography>
                  <Box>
                    <IconButton onClick={() => changeQuantity(item.id, -1)} size="small"><RemoveIcon /></IconButton>
                    <Typography sx={{ mx: 1, minWidth: 20, display: 'inline-block', textAlign: 'center' }}>{item.quantity}</Typography>
                    <IconButton onClick={() => changeQuantity(item.id, 1)} size="small"><AddIcon /></IconButton>
                  </Box>
                  <Typography sx={{ minWidth: 60, textAlign: 'right' }}>₹{item.price * item.quantity}</Typography>
                  <IconButton onClick={() => removeFromOrder(item.id)} size="small" sx={{ ml: 1, color: 'crimson' }}><CloseIcon /></IconButton>
                </Box>
              ))}
              <Box sx={{ borderTop: '1.5px solid goldenrod', pt: 2, mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontWeight: 500 }}>Subtotal: <span style={{ float: 'right' }}>₹{subtotal}</span></Typography>
                <Typography sx={{ fontWeight: 500 }}>GST (5%): <span style={{ float: 'right' }}>₹{gst}</span></Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Total: <span style={{ float: 'right' }}>₹{total}</span></Typography>
              </Box>
              <Button color="warning" variant="contained" sx={{ mt: 2, mr: 2 }} onClick={() => setOrder([])}>Clear Order</Button>
              <Button color="success" variant="contained" sx={{ mt: 2 }} onClick={handlePrepare}>Prepare Order</Button>
            </Box>
          ) : (
            <Typography align="center" sx={{ color: 'white', opacity: 0.6, my: 3, fontStyle: 'italic' }}>
              Your order is empty! Add your favorite biryani.<br />😋🍚
            </Typography>
          )}
        </Box>
      </Box>
      {/* Floating Cart Button */}
      {order.length > 0 && (
        <Badge
          badgeContent={order.reduce((sum, item) => sum + item.quantity, 0)}
          color="error"
          sx={{
            position: 'fixed',
            zIndex: 1400,
            bottom: 34,
            right: 34,
            '& .MuiBadge-badge': {
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }
          }}
        >
          <Tooltip title="View Cart" arrow>
            <IconButton
              size="large"
              onClick={scrollToOrder}
              sx={{
                bgcolor: 'goldenrod',
                boxShadow: '0 2px 14px 2px #5a4021',
                '&:hover': { bgcolor: 'gold', boxShadow: '0 4px 18px 4px gold' }
              }}
            >
              <ShoppingCartIcon sx={{ color: 'white', fontSize: 32 }} />
            </IconButton>
          </Tooltip>
        </Badge>
      )}
      {/* Preparation Animation Dialog */}
      <Dialog open={preparationDialog} TransitionComponent={Slide}>
        <Box sx={{ p: 3, minWidth: 250, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>Preparing your order…</Typography>
          <Box sx={{
            mt: 2,
            mb: 2,
            width: 70,
            height: 70,
            mx: 'auto',
            bgcolor: 'goldenrod',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite'
          }} />
          <style>
            {`@keyframes spin { to { transform: rotate(360deg); } }`}
          </style>
          <Typography sx={{ mt: 2 }}>Estimated: 2 minutes</Typography>
        </Box>
      </Dialog>
      {/* Snackbar notification */}
      <Snackbar
        open={showSnackbar}
        message="Item added to order!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={1200}
      />
    </Box>
  );
}

export default RestaurantMenu;
