import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'

import Home from './pages/Home'
// import Register from './pages/auth/Register'
// import Login from './pages/auth/Login/index.jsx'
// import ForgotPassword from './pages/auth/ForgotPassword'
// import CompleteProfile from './pages/auth/CompleteProfile'
import Contact from './pages/Contact/index.jsx'
import About from './pages/About/index.jsx'
import EventDetails from './pages/EventDetails/index.jsx'
// import Profile from './pages/Profile/index.jsx'
import Sponsor from './pages/sponsor/index.jsx'
// import ReverseAuthProtectedRoute from './components/hoc/ReverseAuthProtectedRoute'
// import AuthProtectedRoute from './components/hoc/AuthProtectedRoute'
// import CompleteProfileAccess from './components/hoc/CompleteProfileAccess'
import Teams from './pages/Teams/index.jsx'
// import EventRegister from './pages/EventRegister/index.jsx'
import TeamRegistration from './pages/Teams/TeamRegsitration.js'
import HomeNav from './components/header/homeNav'
import Header from './components/header'
import Events from './pages/Events/index.jsx'
import EventsSearch from './pages/EventsSearch/index.jsx'
import EventCategories from './pages/EventCategories/index.jsx'
import Drawer from './components/header/drawer'

function RouteComponent({ open, setOpen, handleOpen, handleClose, inProp, setInProp }) {
  const [drawer, setDrawer] = useState(false)
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeNav />
                <Home
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                />
              </>
            }
          />
          {/* <Route
            path="/register"
            element={
              <ReverseAuthProtectedRoute>
                <Header />
                <Register />
              </ReverseAuthProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/login"
            element={
              <ReverseAuthProtectedRoute>
                <Header />
                <Login />
              </ReverseAuthProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/complete-profile"
            element={
              <CompleteProfileAccess>
                <Header />
                <CompleteProfile />
              </CompleteProfileAccess>
            }
          /> */}
          {/* <Route
            path="/forgot-password"
            element={
              <ReverseAuthProtectedRoute>
                <Header />
                <ForgotPassword />
              </ReverseAuthProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/profile"
            element={
              <AuthProtectedRoute>
                <Header />
                <Profile />
              </AuthProtectedRoute>
            }
          /> */}
          <Route
            path="/eventregister"
            element={
              <>
                <Header />
                <TeamRegistration />
              </>
            }
          />
          <Route
            path="/partners"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <Sponsor />
                )}
              </>
            }
          />

          <Route
            path="/events"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <EventCategories />
                )}
              </>
            }
          />
          <Route
            path="/events/:eventCategorySlug"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <Events />
                )}
              </>
            }
          />
          <Route
            path="/events/search"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <EventsSearch />
                )}
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <Contact />
                )}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <About />
                )}
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <Teams />
                )}
              </>
            }
          />
          {/* <Route
            path="events/:eventCode/event-register"
            element={
              <>
                <Header />
                <EventRegister />
              </>
            }
          /> */}
          <Route
            path="/contact"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <Contact />
                )}
              </>
            }
          />
          <Route
            path="/event/:eventCode"
            element={
              <>
                <Header
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  inProp={inProp}
                  setInProp={setInProp}
                  drawer={drawer}
                  setDrawer={setDrawer}
                />
                {drawer ? (
                  <Drawer
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    inProp={inProp}
                    setInProp={setInProp}
                  />
                ) : (
                  <EventDetails />
                )}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
