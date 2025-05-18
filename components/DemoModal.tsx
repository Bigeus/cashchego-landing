'use client'
import { useState } from 'react'
import { Copy, Mail } from 'lucide-react' // Adicione esses ícones
import { Button } from './ui/button'

// Adicione este componente antes do return principal
export default function DemoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false)
  
  const emailTemplate = `Assunto: Demonstração do CashChego

Olá equipe CashChego,

Meu nome é [Seu Nome Completo], representante da empresa [Nome da Empresa]. 
Estamos interessados em conhecer melhor a solução CashChego para gestão financeira.

Temos aproximadamente [Número] funcionários e gostaríamos de agendar uma demonstração.

Principais necessidades:
- [Descreva brevemente suas necessidades]

Agradeço desde já pela atenção e aguardo seu retorno.

Atenciosamente,
[Seu Nome]
[Seu Telefone para Contato]`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailTemplate)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-amber-600">Solicitar Demonstração</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className='text-amber-700 font-bold'>Obrigado </span> pelo seu interesse no <span className='text-black font-bold'>
              Cash</span><span className='text-amber-500 font-bold'>Chego</span>! Para agendar uma demonstração gratuita, 
            entre em contato conosco pelo e-mail:
          </p>
          
          <div className="flex items-center gap-2 bg-amber-50 p-3 rounded-lg">
            <Mail className="text-amber-600" />
            <span className="font-medium">contato@cashchego.com.br</span>
          </div>
          
          <p className="text-gray-700">
            Você pode copiar o modelo abaixo para facilitar seu contato:
          </p>
          
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-sm">
              {emailTemplate}
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-white p-2 rounded-lg border hover:bg-gray-50"
              title="Copiar modelo"
            >
              {copied ? (
                <span className="text-green-600 text-xs">Copiado!</span>
              ) : (
                <Copy className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
            >
              Fechar
            </Button>
            <Button 
              className="bg-amber-500 hover:bg-amber-600"
              onClick={() => {
                window.location.href = 'mailto:contato@cashchego.com.br?subject=Demonstração do CashChego'
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Abrir E-mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}