import React, { useState } from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { account, ID } from '../../app/config'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { resetCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/authSlice'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Reset any previous toast
    toast.dismiss()

    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      // Create user account
      await account.create(ID.unique(), email, password, `${name} ${lastName}`)

      // Auto login after signup
      await account.createEmailPasswordSession(email, password)

      const user = await account.get()

      dispatch(loginSuccess(user))
      dispatch(resetCart());

      toast.success("Signup successful! Redirecting...")
      setTimeout(() => navigate("/"), 1500)
    } catch (error) {
      console.error(error)
      toast.error(error?.message || "Signup failed. Try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col justify-center items-center gap-4 mt-4 w-full"
    >
      <Input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        disabled={loading}
      />

      <Button text={loading ? "Signing up..." : "Sign Up"} disabled={loading} className="bg-black text-white text-lg sm:text-xl font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition cursor-pointer duration-300 ease-in-out w-full" />
    </form>
  )
}

export default Signup
